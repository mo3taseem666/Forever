import Logo from './mini components/Logo';
import PathsList from './mini components/PathsList';
import Icons from './mini components/Icons';

export default function NavBar() {
   return (
      <div className="flex justify-between items-center">
         <Logo />
         <PathsList />
         <Icons />
      </div>
   );
}
