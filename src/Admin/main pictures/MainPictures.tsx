import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteFileFromStorage, getAllPictures, uploadFileToStorage } from '../../firebase/firebaseTS';

export default function MainPictures() {
   const [allPics, setAllPics] = useState<{ id: string; url: string }[]>([]);
   const [file, setFile] = useState<null | File>(null);

   useEffect(() => {
      async function getAllPics() {
         const allPics = await getAllPictures('mainPictures');
         if (allPics) {
            setAllPics(allPics);
         }
      }
      getAllPics();
   }, []);


   function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
      const file = e.target?.files?.[0];
      if (file) {
         setFile(file);
      }
   }

   function handleClick() {
      if (file) {
         uploadFileToStorage(file, 'mainPictures', 'mainPictures');
      }
   }

   function handleDelete (id:string) {
      deleteFileFromStorage(id,'mainPictures')
   }

   return (
      <div className="flex flex-col">
         <div className="w-full items-center flex gap-5 ">
            <p
               onClick={handleClick}
               className={`size-8 ${file ? 'cursor-pointer bg-blue-400' : 'cursor-not-allowed bg-gray-400'}  flex justify-center items-center text-4xl rounded-full`}
            >
               +
            </p>
            <input onChange={handleFile} type="file" />
         </div>
         <div className="w-full flex gap-5 flex-wrap mt-10">
            {allPics.length > 0 &&
               allPics.map(el => (
                  <div key={el.id} className='relative shadow-xl'>
                     <img
                        key={el.id}
                        src={el.url}
                        className="w-96 rounded-lg"
                        alt="mainPic"
                     />
                     <FontAwesomeIcon onClick={()=>handleDelete(el.id)} className='absolute text-red-500 bottom-2 cursor-pointer left-2' icon={faTrash} />
                  </div>
               ))}
         </div>
      </div>
   );
}
