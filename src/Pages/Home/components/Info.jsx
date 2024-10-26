import { faCircleCheck, faHeadset, faRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import OneDiv from '../mini components/info/OneDiv';

export default function Info() {
   return (
      <div className='flex w-[90%] xs:flex-col xs:gap-10 mx-auto items-center mt-32 xs:mt-10 xs:border-y xs:py-10 justify-between'>
         <OneDiv
            name="Easy Exchange Policy"
            details="We offer hassle free exchange policy"
            icon={<FontAwesomeIcon icon={faRotate} className="text-4xl" />}
         />
         <OneDiv
            name="7 Days Return Policy"
            details="We provide 7 days free return policy"
            icon={<FontAwesomeIcon icon={faCircleCheck} className="text-4xl" />}
         />
         <OneDiv
            name="Best customer support"
            details="we provide 24/7 customer support"
            icon={<FontAwesomeIcon icon={faHeadset} className="text-4xl" />}
         />
      </div>
   );
}
