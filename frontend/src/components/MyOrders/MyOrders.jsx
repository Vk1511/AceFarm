import React from "react";
import "./MyOrder.css";
import "../CartIteam/CartIteam.css";

function MyOrders() {
  return (
    <div className="my_order_con">
      <div className="myorder_head">My Orders</div>
      <div className="order_summry_box" >
        <div className="order_summry_head">Order Summary</div>
        <div className="order_id">Order Id: #457845</div>
        <div className="order_id">Status: Delivered</div>
        <div className="order_id">Date: 01-Jan-2022</div>
        <hr />
        <table>
          <thead>
            <tr>
              <td style={{ minWidth: "10rem" }}>Product</td>
              <td style={{ minWidth: "5rem" }}>Qty</td>
              <td style={{ minWidth: "5rem" }}>Price</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ minWidth: "10rem", overflow: "hidden" }}>
                A2 Cow Milk Ghee(Saiwal)
              </td>
              <td style={{ minWidth: "5rem" }}>2</td>
              <td style={{ minWidth: "5rem" }}>₹5400</td>
            </tr>

            <tr>
              <td style={{ minWidth: "10rem", overflow: "hidden" }}>
                A2 Cow Milk Ghee
              </td>
              <td style={{ minWidth: "5rem" }}>2</td>
              <td style={{ minWidth: "5rem" }}>₹5000</td>
            </tr>

            <tr>
              <td style={{ minWidth: "10rem", overflow: "hidden" }}>
                MF Organic Honey
              </td>
              <td style={{ minWidth: "5rem" }}>3</td>
              <td style={{ minWidth: "5rem" }}>₹900</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div className="order_summry_total">Grand Total: ₹11300</div>
      </div>
    </div>
  );
}

export default MyOrders;
