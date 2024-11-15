import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproducts } from "../store/reducers/ProductReducer";
import { asyncgetproducts } from "../store/actions/ProductActions";

const Products = () => {
    const { products } = useSelector((state) => state.ProductReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getproducts());
        dispatch(asyncgetproducts())
    }, []);

    return (
        <div className="m-auto container p-10 mt-5 bg-red-100">
            <h1 className="text-2xl font-bold text-red-900">Products List</h1>
            {products &&
             products.map((product, index) => {
        return <div key={product.id}>
          <h1>{product.title}{" "}
            <span
            //   onClick={() => deleteHandler(index)}
              className='text-red-500 font-black cursor-pointer'>X</span>
          </h1>
        </div>
      })}
        </div>
    );
};

export default Products;
