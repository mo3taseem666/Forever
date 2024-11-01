import { Link } from 'react-router-dom';

export default function ListOfOptions() {
   return (
      <ul className="flex flex-col gap-5 font-medium text-lg">
         <li>
            <Link to="Users">Users</Link>
         </li>
         <li>
            <Link to="MainPictures">Main Pictures</Link>
         </li>
         <li>
            <Link to="Products">Products</Link>
         </li>
         <li>
            <Link to="OtherImages">Other Images</Link>
         </li>
      </ul>
   );
}
