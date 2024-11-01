export default function TitleForForm({ title }: { title: string }) {
   return (
      <div className="flex gap-3 items-center">
         <p className="text-3xl font-Prata">{title}</p>
         <div className="h-[2px] w-8 bg-black"></div>
      </div>
   );
}
