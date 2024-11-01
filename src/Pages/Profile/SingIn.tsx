import SignInForm from './components/SignInForm';
import TitleForForm from './components/TitleForForm';

export interface setLoginProp {
   setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const SingIn: React.FC<setLoginProp> = ({ setLogin }) => {
   return (
      <div className="flex flex-col gap-5 items-center">
         <TitleForForm title="Login" />
         <SignInForm setLogin={setLogin} />
      </div>
   );
};

export default SingIn;
