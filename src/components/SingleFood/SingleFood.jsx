import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMenuContext } from '../../Context/MenuContext';


// const API = `http://localhost:5000/product?id=${id}`;
const SingleFood = () => {
  const { id } = useParams();
  
  const { getSingleProduct , isSingleLoading , singleProduct } = useMenuContext();
   const { image, name, description, newPrice, oldPrice, category } =
     singleProduct;
  useEffect(() => {
    // getSingleProduct(`${API}`);
    getSingleProduct(`http://localhost:5000/product/${id}`);
  },[])

  // const updateLoaderData = useLoaderData();
  // console.log(updateLoaderData);
  
  return (
    <div>
      {/* <h2 className="pt-5">single products {id}</h2> */}
      <div className="singlefood-main pt-5">
        <div className="singlefood-left">
          <h2>
            this is single food {name} {id}
          </h2>
          <img src={image} alt="" />
        </div>
        <div className="singlefood-right">
          <h1>{name}</h1>
          <h1>{description}</h1>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
