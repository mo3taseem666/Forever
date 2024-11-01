interface props {
   errorMsg?: string;
}
export default function InputErrorMsg(props: props) {
   return (
      <div className="absolute xs:mt-1 xs:static xs:px-0 h-full w-full flex items-center text-sm xs:text-xs px-2 left-full text-red-500 font-medium inset-0">
         {props.errorMsg}
      </div>
   );
}
