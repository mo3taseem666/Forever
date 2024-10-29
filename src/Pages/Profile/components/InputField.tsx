import { FieldError, useForm, UseFormRegister } from 'react-hook-form';
import InputErrorMsg from '../../../Golbal Components/InputErrorMsg';

interface props {
   name: string;
   placeholder: string;
   type: string;
   errorMsg?: string | null;
   registerFn : UseFormRegister<any>
}

export default function InputField({
   name,
   placeholder,
   type,
   errorMsg,
   registerFn
}: props) {
   
   return (
      <div className="relative">
         <input
            {...registerFn(name)}
            className="px-2 font-medium py-2 border border-black focus:outline-none xs:min-w-80 min-w-96"
            placeholder={placeholder}
            type={type}
         />
         {errorMsg && <InputErrorMsg errorMsg={errorMsg} />}
      </div>
   );
}
