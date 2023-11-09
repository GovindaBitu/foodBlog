import React,{useState} from "react";
import { data } from "../data/Data.js";

const Food = () => {
//   console.log(data);

const [foods,setFoods] = useState(data);

//filter type burger/pizza/chicken
const filterType = (category)=>{
    setFoods(
        data.filter((item)=>{
            return item.category === category;
        })
    );
};

//filter by price
const filterPrise = (price)=>{
    setFoods (
        data.filter((item)=>{
            return item.price === price;
        })
    )
}

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top rated Menu Items</h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type */}
        <div className="font-bold text-gray-700">
          <p>Filter Type</p>
          <div className="flex justify-between  flex-wrap">
            <button onClick={()=> setFoods(data)} className="m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ">All</button>
            <button onClick={()=> filterType('burger')} className="m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ">Burgers</button>
            <button onClick={()=> filterType('pizza')} className="m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ">Pizza</button>
            <button onClick={()=> filterType('salad')} className="m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ">Salads</button>
            <button onClick={()=> filterType('chicken')} className="m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ">Chicken</button>
          </div>
        </div>
        {/* Filter price */}
        <div className="flex justify-between max-w-[390px] w-full">
          <p className="font-bold text-gray-700">Filter Price</p>
          <button onClick={()=> filterPrise('₹99')} className="m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">₹99</button>
          <button onClick={()=> filterPrise('₹149')} className="m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">₹149</button>
          <button onClick={()=> filterPrise('₹199')} className="m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">₹199</button>
          <button onClick={()=> filterPrise('₹249')} className="m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">₹249</button>
        </div>
      </div>

        {/* Display foods */}
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index)=>(
              <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
              <img src={item.image} alt={item.name}  className="w-full h-[200px]  object-cover rounded-t-lg"/>
              <div className="flex justify-between px-2 py-4 ">
                <p className="font-bold">{item.name}</p>
                <p>
                    <span className="bg-orange-500 text-white p-1 rounded-full">{item.price}</span>
                </p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
