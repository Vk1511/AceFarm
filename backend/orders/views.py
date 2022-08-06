from xml.dom import NotFoundErr
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework import response, status

from authapp.models import Users
from .serializer import OrderSerializer
from products.models import Products
from .models import OrderProducts, Order
from rest_framework.exceptions import ValidationError
import uuid

# Create your views here.


class OrderPlace(APIView):

    # permission_classes = [IsAdminUser, IsAuthenticated]

    def post(self, request, *args, **kwargs):
        order_id = uuid.uuid4().hex[:8]
        try:
            order_products_object = []
            all_order_market_price = sum(k["market_price"] for k in request.data)
            all_order_our_price = sum(k["our_price"] for k in request.data)
            overall_discount = all_order_market_price - all_order_our_price

            current_user_instance = Users.objects.get(id=request.user.id)

            order_object = Order(
                order_id=order_id,
                market_price=all_order_market_price,
                discount=overall_discount,
                our_price=all_order_our_price,
                status="ORDER_PLACED",
                user_id=current_user_instance,
            )
            order_object.save()

            order_instance = Order.objects.get(order_id=order_id)
            for order_data in request.data:
                order_discount = order_data["market_price"] - order_data["our_price"]

                product_instance = Products.objects.get(
                    product_id=order_data["product_id"]
                )

                order_object = OrderProducts(
                    order_id=order_instance,
                    product_id=product_instance,
                    discount=order_discount,
                    market_price=order_data["market_price"],
                    our_price=order_data["our_price"],
                    qty=order_data["qty"],
                    units=order_data["units"],
                )
                order_products_object.append(order_object)

            OrderProducts.objects.bulk_create(order_products_object)

            return response.Response(order_id, status=status.HTTP_200_OK)
        except Exception as e:
            raise ValidationError("something gone wrong")

    def get(self, request, *args, **kwargs):
        query_param = self.request.query_params.get("order_id")
        final = []
        if query_param is not None:
            try:
                all_orders = Order.objects.get(order_id=query_param)
                serializer = OrderSerializer(all_orders)
                products = OrderProducts.objects.filter(order_id=all_orders.id).values()
                serialized_data = serializer.data
                serialized_data["products"] = products
                final.append(serialized_data)
            except Exception as e:
                raise ValidationError("No Data Found With Given Id")
        else:
            all_orders = Order.objects.filter(user_id=request.user.id).values()
            
            for order in all_orders:
                products = OrderProducts.objects.filter(order_id=order["id"]).values()
                order["products"] = products
                final.append(order)
        return response.Response(final, status=status.HTTP_200_OK)
