import React, { useEffect, useState } from 'react';
import { getDataFromFirestore } from '../../firebase/firebaseTS';

type User = {
   id: string;
   fullName: string;
   phoneNumber: string;
   email: string;
};

export default function Users() {
   const [users, setUsers] = useState<User[]>([]);
   useEffect(() => {
      async function getUsers() {
         const result = await getDataFromFirestore('users');
         if (result) {
            setUsers(result);
         }
      }
      getUsers();
   }, []);

   return (
      <div className="relative overflow-hidden rounded-lg">
         <div className="flex gap-5 font-medium items-center">
            <p className="mb-12 text-white text-2xl ">USERS</p>
            <p className='mb-12 bg-gray-300 size-8 flex items-center justify-center rounded-full'>{users?.length}</p>
         </div>
         <table className="table-fixed w-full text-left">
            <thead className="uppercase bg-[#6991e0] text-[#e5e7eb]">
               <tr>
                  <th className="py-4 text-center p-4">fullName</th>
                  <th className="py-4 text-center p-4">phoneNumber</th>
                  <th className="py-4 text-center p-4">email</th>
               </tr>
            </thead>
            <tbody className="bg-white text-gray-500">
               {users.length > 0 &&
                  users.map(el => (
                     <tr key={el.id}>
                        <th className="py-4 text-center p-4">{el.fullName}</th>
                        <th className="py-4 text-center p-4">
                           {el.phoneNumber}
                        </th>
                        <th className="py-4 text-center p-4">{el.email}</th>
                     </tr>
                  ))}
            </tbody>
         </table>
      </div>
   );
}
