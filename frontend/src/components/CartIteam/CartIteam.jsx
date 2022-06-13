import {
  CloseSquareOutlined,
  MinusSquareFilled,
  PlusSquareFilled,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import product from "../../Assets/Images/product.png";
import honey from "../../Assets/Images/honey.png";
import "./CartIteam.css";

function CartIteam() {
  return (
    <div className="cartIteam_con">
      <div className="cart_head">
        My Cart
        {/* <Button >Pay Now</Button> */}
      </div>

      <div className="cart_details_con">
        <div className="cart_details">
          <table>
            <thead>
              <tr>
                <td style={{ minWidth: "8rem" }}></td>
                <td style={{ minWidth: "15rem" }}>Product</td>
                <td style={{ minWidth: "8rem", textAlign: "center" }}>Qty</td>
                <td style={{ minWidth: "2rem" }}></td>
                <td
                  style={{
                    minWidth: "5rem",
                    // textAlign: "right",
                  }}
                >
                  Price
                </td>
                <td
                  style={{
                    minWidth: "5rem",
                    textAlign: "right",
                  }}
                >
                  Total Price
                </td>
                <td
                  style={{
                    minWidth: "3rem",
                    textAlign: "right",
                  }}
                ></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ minWidth: "8rem", textAlign: "center" }}>
                  <img src={product} alt="ghee" className="cart_img" />
                </td>
                <td style={{ minWidth: "15rem" }}>
                  <div className="cart_product_title">
                    A2 Cow Milk Ghee(Saiwal)
                  </div>
                  <div
                    className="homeproduct_common_font"
                    style={{ width: "100%" }}
                  >
                    Ghee is a class of clarified butter that originated in
                    India. It is commonly used in cuisine of the Indian
                    subcontinent, Middle Eastern cuisine, traditional medicine,
                  </div>
                </td>
                <td style={{ minWidth: "8rem", textAlign: "center" }}>
                  <PlusSquareFilled
                    style={{
                      fontSize: "1.2rem",
                      paddingRight: ".3rem",
                      cursor: "pointer",
                      color: "#042F40",
                    }}
                  />
                  2
                  <MinusSquareFilled
                    style={{
                      fontSize: "1.2rem",
                      paddingLeft: ".3rem",
                      cursor: "pointer",
                      color: "#042F40",
                    }}
                  />
                </td>
                <td style={{ minWidth: "2rem" }}>x</td>
                <td
                  style={{
                    minWidth: "5rem",
                    // textAlign: "right",
                  }}
                >
                  ₹2800
                </td>
                <td
                  style={{
                    minWidth: "5rem",
                    textAlign: "right",
                  }}
                >
                  ₹5400
                </td>
                <td
                  style={{
                    minWidth: "3rem",
                    textAlign: "right",
                  }}
                >
                  <CloseSquareOutlined
                    style={{
                      fontSize: "1.2rem",
                      paddingLeft: ".3rem",
                      cursor: "pointer",
                      color: "#042F40",
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td style={{ minWidth: "8rem", textAlign: "center" }}>
                  <img src={product} alt="ghee" className="cart_img" />
                </td>
                <td style={{ minWidth: "15rem" }}>
                  <div className="cart_product_title">A2 Cow Milk Ghee</div>
                  <div
                    className="homeproduct_common_font"
                    style={{ width: "100%" }}
                  >
                    Ghee is a class of clarified butter that originated in
                    India. It is commonly used in cuisine of the Indian
                    subcontinent, Middle Eastern cuisine, traditional medicine,
                  </div>
                </td>
                <td style={{ minWidth: "8rem", textAlign: "center" }}>
                  <PlusSquareFilled
                    style={{
                      fontSize: "1.2rem",
                      paddingRight: ".3rem",
                      cursor: "pointer",
                      color: "#042F40",
                    }}
                  />
                  2
                  <MinusSquareFilled
                    style={{
                      fontSize: "1.2rem",
                      paddingLeft: ".3rem",
                      cursor: "pointer",
                      color: "#042F40",
                    }}
                  />
                </td>
                <td style={{ minWidth: "2rem" }}>x</td>
                <td
                  style={{
                    minWidth: "5rem",
                    // textAlign: "right",
                  }}
                >
                  ₹2500
                </td>
                <td
                  style={{
                    minWidth: "5rem",
                    textAlign: "right",
                  }}
                >
                  ₹5000
                </td>
                <td
                  style={{
                    minWidth: "3rem",
                    textAlign: "right",
                  }}
                >
                  <CloseSquareOutlined
                    style={{
                      fontSize: "1.2rem",
                      paddingLeft: ".3rem",
                      cursor: "pointer",
                      color: "#042F40",
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td style={{ minWidth: "8rem", textAlign: "center" }}>
                  <img src={honey} alt="ghee" className="cart_img" />
                </td>
                <td style={{ minWidth: "15rem" }}>
                  <div className="cart_product_title">MF Organic Honey</div>
                  <div
                    className="homeproduct_common_font"
                    style={{ width: "100%" }}
                  >
                    Honey Science Corporation, popularly known as Honey, is an
                    American technology company and subsidiary of PayPal known
                    for developing a browser extension that aggregates and
                    automatically applies online coupons on eCommerce websites.
                  </div>
                </td>
                <td style={{ minWidth: "8rem", textAlign: "center" }}>
                  <PlusSquareFilled
                    style={{
                      fontSize: "1.2rem",
                      paddingRight: ".3rem",
                      cursor: "pointer",
                      color: "#042F40",
                    }}
                  />
                  3
                  <MinusSquareFilled
                    style={{
                      fontSize: "1.2rem",
                      paddingLeft: ".3rem",
                      cursor: "pointer",
                      color: "#042F40",
                    }}
                  />
                </td>
                <td style={{ minWidth: "2rem" }}>x</td>
                <td
                  style={{
                    minWidth: "5rem",
                    // textAlign: "right",
                  }}
                >
                  ₹300
                </td>
                <td
                  style={{
                    minWidth: "5rem",
                    textAlign: "right",
                  }}
                >
                  ₹900
                </td>
                <td
                  style={{
                    minWidth: "3rem",
                    textAlign: "right",
                  }}
                >
                  <CloseSquareOutlined
                    style={{
                      fontSize: "1.2rem",
                      paddingLeft: ".3rem",
                      cursor: "pointer",
                      color: "#042F40",
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bill_details">
          <div className="order_summry_box">
            <div className="order_summry_head">Order Summary</div>
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
            <div style={{ padding: "0.5rem 0.7rem" }}>
              <Button className="order_summry_btn linear_back">Continue</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartIteam;
