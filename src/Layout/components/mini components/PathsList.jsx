import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMyProvider } from '../../../../Context/SharedStateContext';

const navItems = [
   { id: 0, path: '/', name: 'HOME' },
   { id: 1, path: '/Collection', name: 'COLLECTION' },
   { id: 2, path: '/About', name: 'ABOUT' },
   { id: 3, path: '/Contact', name: 'CONTACT' }
];
const adminID = 'dnbTPNZ4RJeXexLsIL1qKKFefqA3';

export default function PathsList() {
   const [selected, setSelected] = useState(0);
   const location = useLocation();
   const { user } = useMyProvider();

   useEffect(() => {
      window.scrollTo({
         top: 0,
         left: 0
      });
      if (location.pathname === '/Collection') {
         setSelected(1);
      } else if (location.pathname === '/About') {
         setSelected(2);
      } else if (location.pathname === '/Contact') {
         setSelected(3);
      } else if (location.pathname === '/') {
         setSelected(0);
      } else if (location.pathname === '/Admin') {
         setSelected('Admin');
      } else {
         setSelected(null);
      }
   }, [location.pathname]);

   return (
      <ul className="flex xs:hidden items-center text-sm text-gray-700 font-semibold gap-4">
         {navItems.map(el => (
            <ItemList
               key={el.id}
               path={el.path}
               setSelected={setSelected}
               selected={selected}
               id={el.id}
               name={el.name}
            />
         ))}
         {user?.uid === adminID && (
            <ItemList
               key="admin"
               path="Admin"
               setSelected={setSelected}
               selected={selected}
               id="Admin"
               name="ADMIN"
            />
         )}
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
