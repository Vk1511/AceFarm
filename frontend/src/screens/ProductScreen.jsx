import React from "react";
import Comment from "../components/Comment/Comment";
import ProductDesc from "../components/ProductDesc/ProductDesc";
import ProductDetails from "../components/ProductDetails/ProductDetails";

function ProductScreen() {
  return (
    <div>
      <div className="product_details">
        <div className="product_thumbnail"></div>
        <div className="product_data">
          <ProductDetails />
        </div>
      </div>
      <ProductDesc />
      <Comment />
    </div>
  );
}

export default ProductScreen;
