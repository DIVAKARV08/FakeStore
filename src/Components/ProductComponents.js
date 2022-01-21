import { floor } from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponents = () => {
  const products = useSelector((state) => state.allproducts.products);

  const renderlist = products.map((products) => {
    return (
      <div class="col-4 col-sm-3 my-4 p-0" key={products.id}>
        <Link
          to={`/product/${products.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div class="card" style={{ width: "300px", height: "500px" }}>
            <img
              class="card-img-top"
              src={products.image}
              alt={products.title}
              style={{ width: "100%", height: "300px" }}
            />
            <div class="card-body">
              <h4 class="card-title">{products.title}</h4>
              <p class="card-text fw-bold">
                {" "}
                ₹ {floor(products.price * 74.54)}
              </p>
            </div>
            <div class="card-footer bg-transparent">
              <p class="text-muted"> {products.category}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div class="container m-5">
        <div class="row">{renderlist}</div>
      </div>
    </>
  );
};

export default ProductComponents;
