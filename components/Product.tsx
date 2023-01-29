import React, { useState, useEffect, Key } from "react";
import Image, { StaticImageData } from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from 'next/router'
import SinglePage from '../pages/SinglePage'
interface ProdcutIProps {
  product: {
    id: string;
    size: string;
    price: number;
    img: StaticImageData;
  };
}
interface SignleProductState {
  id: number;
  size: string;
  price: number;
  img: StaticImageData;

}

const Product = ({ product }: ProdcutIProps) => {
  const [slectedItem, setslectedItem] = useState(false)
  const [selectedProduct, setselectedProduct] = useState<SignleProductState>()
  const router = useRouter()


  const singlItemCart = (item: ProdcutIProps): void => {

    router.push({ pathname: '/SinglePage', query: { item: JSON.stringify(item.product) } })
  };
  function translate(arg0: number, arg1: number): import("csstype").Property.Transform | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className=" relative border">
        <div>
          <div
            className=" flex-1 items-center cursor-pointer justify-center  w-full min-h-[70vh] md:min-h-[50vh],"
            onClick={() => singlItemCart({ product })}

          >

            <div
              className=" flex group justify-center items-center w-full h-full"
              key={product.id}
            >
              <div
                className="absolute bg-black w-full h-full hidden  top-0 group-hover:block "
                style={{
                  opacity: "0.2",
                  zIndex: "9",

                }}
              ></div>
              <div
            className="absolute top-0  cursor-pointer w-full h-full  flex  justify-center  items-center hidden group-hover:flex "
            style={{
              zIndex: "3",
            }}
          >
            <div
              className="flex justify-center items-center rounded-full border bg-white mr-2 "
              style={{ width: "40px", height: "40px" }}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5  text-gray-500 dark:text-gray-400 "
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 
            0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                ></path>
              </svg>
            </div>

            <div
              className="flex justify-center items-center  mx-1 rounded-full border bg-white "
              style={{ width: "40px", height: "40px" }}
            >
              <p>${product.price}</p>
            </div>
            <div
              className="flex justify-center items-center rounded-full border bg-white "
              style={{ width: "40px", height: "40px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi mx-1 bi-cart"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
              </svg>
            </div>
            </div>
<div  className="bg-white absolute rounded-full border "
            style={{ width: "200px", height: "200px" ,top:"50%",left:"50%", transform:" translate(-50%, -50%)"}}
          ></div>
          
              <Image
                src={product?.img}
                alt=""
                fill
                className="w-full h-full"
                style={{ objectFit: "contain", zIndex: "2" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className=" flex-1 items-center cursor-pointer justify-center   "
        style={{ minWidth: "280px", height: "350px" }}
    
        onClick={() => singlItemCart({ product })}

      >
        <div
          className=" flex group justify-center items-center w-full h-full"
          key={product.id}
        >
          <div
            className="absolute w-full h-full  hidden group-hover:block "
            style={{
              opacity: "0.2",
              zIndex: "4",
              
            }}
          ></div>

          <div
            className="bg-white absolute rounded-full border "
            style={{ width: "200px", height: "200px" }}
          ></div>
          <div
            className="absolute cursor-pointer flex  justify-center  items-center hidden group-hover:flex  "
            style={{
              zIndex: "3",
            }}
          >
            <div
              className="flex justify-center items-center rounded-full border bg-white mr-2 "
              style={{ width: "40px", height: "40px" }}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5  text-gray-500 dark:text-gray-400 "
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 
            0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                ></path>
              </svg>
            </div>

            <div
              className="flex justify-center items-center  mx-1 rounded-full border bg-white "
              style={{ width: "40px", height: "40px" }}
            >
              <p>${product.price}</p>
            </div>
            <div
              className="flex justify-center items-center rounded-full border bg-white "
              style={{ width: "40px", height: "40px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi mx-1 bi-cart"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
              </svg>
            </div>
          </div>

         
        </div>
      </div> */}


    </>
  );
};

export default Product;
