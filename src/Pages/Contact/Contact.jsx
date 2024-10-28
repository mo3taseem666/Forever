import React from 'react';
import Title from '../../Golbal Components/Title';
import contactImg from '../../assets/frontend_assets/contact_img.webp';
import Subscribe from '../../Golbal Components/Subscribe';

export default function Contact() {
   return (
      <div className="border-t mt-5 flex flex-col items-center pt-5">
         <Title first="CONTACT" second="US" />
         <div className="flex xs:flex-col xs:mb-10 gap-10 mt-10 items-center">
            <img src={contactImg} alt="contact-img" className="w-[480px]" />
            <div className="flex flex-col xs:w-full font-medium text-gray-500 gap-6">
               <p className="font-bold text-xl text-gray-700">Our store</p>
               <div>
                  <p>Egypt, Cairo</p>
                  <p>Gize, Tersa zip: 12511</p>
               </div>
               <div>
                  <p>Tel: +201150998560</p>
                  <p>Email: mo3data@gmail.com</p>
               </div>
               <p className="text-xl text-gray-700 font-bold">
                  Careers at Forever
               </p>
               <p>Learn more about our teams and job openings.</p>
               <button className="self-start text-gray-800 text-sm border font-medium border-gray-800 hover:border-black hover:bg-black hover:text-white duration-200 ease-in py-4 px-7">
                  Explore Jobs
               </button>
            </div>
         </div>
         <Subscribe width="w-full" />
      </div>
   );
}
