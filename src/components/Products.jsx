import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getproducts } from "../store/reducers/ProductReducer";
import { asyncgetproducts } from "../store/actions/ProductActions";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getproducts());
    asyncgetproducts()
  },[]);

  return (
    <div className="m-auto container p-10 mt-5 bg-red-100">
      <h1 className="text-2xl font-bold text-red-900">Products List</h1>
      <h1>hello</h1>
    </div>
  );
};

export default Products;
