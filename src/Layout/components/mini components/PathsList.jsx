import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PathsList() {
   const [selected, setSelected] = useState(0);
   return (
      <ul className="flex items-center text-sm text-gray-700 font-semibold gap-4">
         <ItemList
            setSelected={setSelected}
            selected={selected}
            id={0}
            name="HOME"
         />
         <ItemList
            setSelected={setSelected}
            selected={selected}
            id={1}
            name="COLLECTION"
         />
         <ItemList
            setSelected={setSelected}
            selected={selected}
            id={2}
            name="ABOUT"
         />
         <ItemList
            setSelected={setSelected}
            selected={selected}
            id={3}
            name="CONTACT"
         />
      </ul>
   );
}

function ItemList({ name, id, selected, setSelected }) {
   return (
      <Link
         onClick={() => setSelected(id)}
         id={id}
         className="relative flex items-center flex-col group"
      >
         <li className="py-1">{name}</li>
         <div
            className={`${selected === id ? 'w-1/2' : 'w-0 group-hover:w-1/2'} h-[1px]  duration-200 bg-gray-700`}
         ></div>
      </Link>
   );
}
