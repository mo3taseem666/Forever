import SignUpForm from './components/SignUpForm';
import TitleForForm from './components/TitleForForm';

export default function SignUp({
   setLogin
}: {
   setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) {
   return (
      <div className="flex flex-col gap-5 items-center">
         <TitleForForm title="Sign Up" />
         <SignUpForm setLogin={setLogin} />
      </div>
   );
}
