from rest_framework import serializers
from .models import Products


class ProductSerializer(serializers.ModelSerializer):
    # our_price = serializers.SerializerMethodField("get_our_price")

    class Meta:
        model = Products
        fields = (
            "product_id",
            "product_name",
            "product_description",
            "market_price",
            "discount",
            "our_price",
            "rating",
            "is_selling",
        )

    # def get_our_price(self, obj):
    #     market_price = self.context["request"].query_params.get("market_price", None)
    #     discount = self.context["request"].query_params.get("discount", None)
    #     discount_amt = market_price - ((discount / market_price) * 100)
    #     return discount_amt
