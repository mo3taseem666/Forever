import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function PathsList() {
   const [selected, setSelected] = useState(0);
   const navigate = useNavigate();
   const location = useLocation();

   console.log(location.pathname);
   console.log(selected);

   useEffect(() => {
      if (location.pathname === '/Collection') {
         setSelected(1);
      } else if (location.pathname === '/About') {
         setSelected(2);
      } else if (location.pathname === '/Contact') {
         setSelected(3);
      } else if (location.pathname === '/') {
         setSelected(0);
      } else {
         setSelected(null);
      }
   }, [location.pathname]);

   return (
      <ul className="flex items-center text-sm text-gray-700 font-semibold gap-4">
         <ItemList
            path={'/'}
            setSelected={setSelected}
            selected={selected}
            id={0}
            name="HOME"
         />
         <ItemList
            path={'/Collection'}
            setSelected={setSelected}
            selected={selected}
            id={1}
            name="COLLECTION"
         />
         <ItemList
            path={'/About'}
            setSelected={setSelected}
            selected={selected}
            id={2}
            name="ABOUT"
         />
         <ItemList
            path={'/Contact'}
            setSelected={setSelected}
            selected={selected}
            id={3}
            name="CONTACT"
         />
      </ul>
   );
}

function ItemList({ name, id, selected, setSelected, path }) {
   return (
      <Link
         to={path}
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
