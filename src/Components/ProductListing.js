import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchAll} from "../Redux/Actions/Actions";
import axios from "axios";
import ProductComponents from "./ProductComponents";
import store from "../Redux/Store/Store";

const ProductListing = () => {
  const products = useSelector((state) => state.allproducts);
  const dispatch = useDispatch();
  console.log(products);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));
    dispatch(FetchAll(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div class="row">
      <ProductComponents />
    </div>
  );
};

export default ProductListing;
