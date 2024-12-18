import React from "react";
import videoBanner from "../../assets/whatsapp.mp4"; // Import the video from assets
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

export default function Banner() {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* video section */}
          <div data-aos="zoom-in">
            <video
              src={videoBanner} // Path to the video
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
               // Optional: You can add autoplay, loop, and muted if needed
              autoPlay
              loop
              muted
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Handcrafted Beauty
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Celebrate every moment with our exquisite handmade jewelry.
              Whether it's a special occasion or everyday wear, find the perfect
              piece at Alankaar - The Art of Beds. Explore our collection or
              contact us for a custom creation.

              At alankaar the art of beads, we believe in the art of creating beauty by hand. Each piece in our collection is a testament to the skill and dedication of our talented artisans. With a deep respect for tradition and a keen eye for contemporary design, our jewelry embodies the perfect balance between heritage and modernity. Our commitment to handcrafted beauty means that every item is unique, made with meticulous care and attention to detail. From the selection of high-quality materials to the intricate finishing touches, we ensure that each piece tells a story of craftsmanship and passion. Discover the allure of handcrafted jewelry that transcends time and trends. Whether you’re looking for an elegant accessory for a special occasion or a versatile piece for everyday wear, alankaar the art of beads offers creations that are both timeless and distinctive. Explore our collection and experience the beauty of handcrafted jewelry, made to inspire and adorn. You can contact us for 					   custom creation.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div
                data-aos="fade-up"
                className="flex flex-col items-center text-center"
              >
                {/* <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p> */}
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-col items-center text-center"
              >
                {/* <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p> */}
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-col items-center text-center"
              >
                {/* <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment Method</p> */}
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-col items-center text-center"
              >
                {/* <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
