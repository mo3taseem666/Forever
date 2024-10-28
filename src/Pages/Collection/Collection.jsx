import Title from '../../Golbal Components/Title';
import Filters from './Components/Filters';
import Content from './Components/Content';

export default function Collection() {
   return (
      <div className="border-t pt-2 my-5">
         <Title first="ALL" second="COLLECTIONS" />
         <p className="font-semibold mb-5 xs:mt-5 xs:mb-2 text-xl">FILTERS</p>

         <div className="flex xs:flex-col gap-10">
            <Filters />
            <Content />
         </div>
      </div>
   );
}
