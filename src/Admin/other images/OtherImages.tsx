import React, { useEffect, useState } from 'react';

import useUpload from '../FNS/useUpload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { getAllPictures } from '../../firebase/firebaseTS';

export default function OtherImages() {
   const [field, setField] = useState('');
   const [allPics, setAllPics] = useState<{ id: string; url: string,field:string }[]>([]);

   const {
      file,
      handleFile,
      handleUpload,
      handleDelete
   } = useUpload('otherImages', 'otherImages',field);

   useEffect(() => {
    async function getAllPics() {
       const allPics = await getAllPictures('otherImages');
       if (allPics) {
          setAllPics(allPics);
       }
    }
    getAllPics();
 }, []);

   return (
      <div>
         <div className="w-full items-center flex gap-5 ">
            <p
               onClick={handleUpload}
               className={`size-8 ${file ? 'cursor-pointer bg-blue-400' : 'cursor-not-allowed bg-gray-400'}  flex justify-center items-center text-4xl rounded-full`}
            >
               +
            </p>
            <input onChange={(e)=>setField(e.target.value)} placeholder='Field Name' type="text" className='bg-transparent border rounded-lg focus-within:outline-none py-1 px-3' />
            <input onChange={handleFile} type="file" />
         </div>
         <div className="w-full flex gap-5 flex-wrap mt-10">
            {allPics.length > 0 &&
               allPics.map(el => (
                  <div key={el.id} className='relative shadow-xl'>
                    <p className='text-white font-medium text-lg'>{el.field}</p>
                     <img
                        key={el.id}
                        src={el.url}
                        className="w-96 rounded-lg"
                        alt="mainPic"
                     />
                     <FontAwesomeIcon onClick={()=>handleDelete(el.id,'otherImages')} className='absolute text-red-500 bottom-2 cursor-pointer left-2' icon={faTrash} />
                  </div>
               ))}
         </div>
      </div>
   );
}
