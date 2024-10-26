import React from 'react';
import Title from '../../../Golbal Components/Title';
import ReasonToChooseUs from './ReasonToChooseUs';
import Subscribe from '../../../Golbal Components/Subscribe';

export default function WyhChooseUs() {
   return (
      <div className="mt-10 flex flex-col text-left">
         <Title
            first="WHY"
            second="CHOOSE US"
            textSize="text-xl"
            justify="justify-start"
         />
         <div className="flex xs:flex-col mt-5 gap-6">
            <ReasonToChooseUs
               title="Quality Assurance"
               details="We meticulously select and vet each product to ensure it meets our stringent quality standards."
            />
            <ReasonToChooseUs
               title="Convenience"
               details="With our user-friendly interface and hassle-free ordering process, shopping has never been easier."
            />
            <ReasonToChooseUs
               title="Exceptional Customer Service"
               details="Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority."
            />
         </div>
         <Subscribe />
      </div>
   );
}
