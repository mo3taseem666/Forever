import React, { useEffect, useState } from 'react';
import { getPictureByField } from '../firebase/firebaseTS';


export default function useGetIMG( folder:string, field:string, value:string ) {
   const [img, setImg] = useState<{
      id: string;
      url: any;
   } | null>(null);
   useEffect(() => {
      async function getIMG() {
         const result = await getPictureByField(folder, field, value);
         if (result) {
            setImg(result);
         }
      }
      getIMG();
   }, []);
   return img;
}
