import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { addproduct } from "../Redux/slices/CartSlice";
import { Link } from "react-router-dom";
import { IoTrendingUp } from "react-icons/io5";
import { GiBigDiamondRing } from "react-icons/gi";
import { FaSdCard } from "react-icons/fa6";
import { GiPoloShirt } from "react-icons/gi";

function Home() {
  const Url = "https://fakestoreapi.com/products";
  const Url2 = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);
  const [TrendingProducts, setTrendingProducts] = useState([]);
  const [smartphone, setSmartphone] = useState([]);
  const [laptop, setLaptop] = useState([]);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

  async function fetchProducts() {
    setloading(true);
    try {
      await axios.get(Url).then((Response) => {
        setTrendingProducts(Response.data.slice(0, 4));
        setProducts(Response.data);
        dispatch(addproduct(Response.data));
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchCategoryProducts() {
    setloading(true);
    try {
      await axios.get(Url2).then((Response) => {
        setSmartphone(Response.data.products);
      });
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  }
  useEffect(() => {
    fetchProducts();
    fetchCategoryProducts();
  }, [dispatch]);
  const Smartphones = smartphone
    .filter((data) => data.category === "smartphones")
    .slice(0, 4);
  const Laptop = smartphone
    .filter((data) => data.category === "laptops")
    .slice(0, 4);
  const Fragrances = smartphone
    .filter((data) => data.category === "fragrances")
    .slice(0, 4);
  const Jewelery = products
    .filter((data) => data.category === "jewelery")
    .slice(0, 4);
  const WomensClothing = products
    .filter((data) => data.category === "women's clothing")
    .slice(0, 4);
  const Electronics = products
    .filter((data) => data.category === "electronics")
    .slice(0, 4);

  return (
    <div className="w-full h-full mx-auto relative ">
      {loading ? (
        <Loader />
      ) : products.length > 0 ? (
        <div>
          <div className="w-full bg-zinc-900 relative">
            <div className="max-w-[1100px] mx-auto flex flex-col gap-5 py-4 md:py-8">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-[#FF7F00] flex gap-3 items-center justify-center ">
                  Trending
                  <IoTrendingUp className="font-bold text-white" />
                </p>
              </div>
              <div className="flex flex-wrap justify-evenly gap-y-2 gap-x-4 mx-4">
                {TrendingProducts.map((product, index) => {
                  return <Card product={product} key={index} />;
                })}
              </div>
            </div>
          </div>
          <div className="w-full bg-zinc-100 relative">
            <div className="max-w-[1100px] mx-auto flex flex-col gap-5 py-8">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-[#FF7F00] flex gap-3 items-center justify-center">
                  Jewelery <GiBigDiamondRing className="font-bold text-black" />
                </p>
              </div>
              <div className="flex flex-wrap justify-evenly gap-y-2 gap-x-4 mx-4">
                {Jewelery.map((product, index) => {
                  return <Card product={product} key={index} />;
                })}
              </div>
            </div>
          </div>
          <div className="w-full bg-zinc-900 relative">
            <div className="max-w-[1100px] mx-auto flex flex-col gap-5 py-8">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-[#FF7F00] flex gap-3 items-center justify-center">
                  Womens Clothing <GiPoloShirt className=" text-white" />
                </p>
              </div>
              <div className="flex flex-wrap justify-evenly gap-y-2 gap-x-4 mx-4">
                {WomensClothing.map((product, index) => {
                  return <Card product={product} key={index} />;
                })}
              </div>
            </div>
          </div>
          <div className="w-full bg-zinc-100 relative">
            <div className="max-w-[1100px] mx-auto flex flex-col gap-5 py-8">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-[#FF7F00] flex gap-3 items-center justify-center ">
                  Electronics <FaSdCard className="font-bold text-black " />
                </p>
              </div>
              <div className="flex flex-wrap justify-evenly gap-y-2 gap-x-4 mx-4">
                {Electronics.map((product, index) => {
                  return <Card product={product} key={index} />;
                })}
              </div>
            </div>
          </div>
          <div className="w-full bg-zinc-100 h-full flex justify-center items-center pb-10">
            <Link to={"/Products"}>
              <button
                onClick={() => {
                  dispatch(addproduct(products));
                  window.scrollTo(top);
                }}
                className="text-md bg-black px-6 py-1 text-white rounded-md"
              >
                View All Products
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex flex-col items-center justify-center  ">
          <p className="text-md">No Products Found</p>
        </div>
      )}
    </div>
  );
}

export default Home;
