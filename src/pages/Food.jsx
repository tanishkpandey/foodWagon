import React from "react";
import { FaClock, FaTag } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Restaurant from "../assets/restaurant.png";

// Function to generate random food data
const generateFoodData = (count) => {
  const foodData = [];
  const locations = ["Location A", "Location B", "Location C"];
  const itemNames = ["Burger", "Pizza", "Sushi", "Tacos", "Pasta"];
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  for (let i = 0; i < count; i++) {
    const randomLocation =
      locations[Math.floor(Math.random() * locations.length)];
    const randomItemName =
      itemNames[Math.floor(Math.random() * itemNames.length)];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    foodData.push({
      itemName: randomItemName,
      location: randomLocation,
      image: randomImage,
    });
  }

  return foodData;
};

function Food() {
  const foodData = generateFoodData(10); // Generate 10 random food items
  return (
    <div className="py-12">
      <div className="w-[1200px] mx-auto">
        <div>Filters</div>
        <div>
          <div className="card-container grid grid-cols-1 cursor-pointer gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full mx-auto my-12">
            {foodData.map((food, index) => (
              <div
                key={index}
                className="relative flex flex-col text-gray-700 bg-white bg-clip-border rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
              >
                <div className="relative flex flex-col  text-gray-700 bg-white bg-clip-border rounded-xl w-80">
                  <div className="relative h-60 mx-4 mt-6 overflow-hidden text-white bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <div className="relative">
                      <img
                        src={food.image}
                        alt="card-image"
                        className="absolute z-10"
                      />
                      <div className="bg-[#FFB30E] absolute z-20  rounded flex items-center px-2 py-1 top-3 left-28">
                        <span className=" font-medium  tracking-tighter flex justify-center items-center gap-2">
                          <FaClock />
                          Fast
                        </span>
                      </div>
                      <div className="bg-[#F17228] absolute z-20  rounded flex items-center px-2 py-1 top-3 left-3">
                        <span className=" font-medium  tracking-tighter flex justify-center items-center gap-2">
                          <FaTag />
                          10% Off
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="py-3 px-6 flex gap-4 items-center">
                    <img
                      src={Restaurant}
                      alt="Restaurant"
                      className="w-10 h-10"
                    />
                    <div>
                      <h4 className="text-lg font-bold">{food.itemName}</h4>
                      <h5 className="items-center text-[#F17228] flex gap-2 font-medium">
                        <IoLocationSharp /> {food.location}
                      </h5>
                    </div>
                  </div>
                  <div className="p-6 pt-0 ">
                    <button className="px-[18px] py-[3px] bg-[#78b93c2d] text-[#79B93C] rounded-md flex gap-2 font-bold justify-center items-center mt-3">
                      Restaurant Opened
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
