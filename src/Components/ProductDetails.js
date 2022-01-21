import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FetchOne, RemoveOne } from "../Redux/Actions/Actions";
import { floor } from "lodash";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => console.log(err));
    dispatch(FetchOne(response.data));
  };
  useEffect(() => {
    if (id && id !== "") fetchProductDetail();
    return () => {
      dispatch(RemoveOne());
    };
  }, [id]);

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>Loading..</div>
      ) : (
        <div class="container mt-5 d-flex justify-content-center">
          <div class="card" style={{ width: "500px", height: "650px" }}>
            <img
              class="card-img-top"
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "380px" }}
            />
            <div class="card-body">
              <h4 class="card-title">{product.title}</h4>
              <p class="card-text fw-bold"> ₹ {floor(product.price * 74.54)}</p>
              <p class="card-text"> {product.description}</p>
            </div>

            <div class="card-footer bg-transparent">
              <p class="btn btn-primary d-flex justify-content-center">
                Add to Cart
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
