import { useSearchParams } from 'react-router-dom';

export function handleCheck(
   e: React.ChangeEvent<HTMLInputElement>,
   setCkeckedItems: React.Dispatch<
      React.SetStateAction<{ category: string[]; type: string[] }>
   >,
   searchParams: URLSearchParams,
   setSearchParams: React.Dispatch<React.SetStateAction<URLSearchParams>>
) {
   const { name, checked, id } = e.target;

   setCkeckedItems(old => {
      const newState = { ...old };

      if (id === 'type') {
         if (checked) {
            newState.type = [...old.type, name];
         } else {
            newState.type = old.type.filter(el => el !== name);
         }
         if (newState.type.length) {
            searchParams.set('type', newState.type.join('-'));
         } else {
            searchParams.delete('type');
         }
      } else {
         if (checked) {
            newState.category = [...old.category, name];
         } else {
            newState.category = old.category.filter(el => el !== name);
         }
         if (newState.category.length) {
            searchParams.set('category', newState.category.join('-'));
         } else {
            searchParams.delete('category');
         }
      }
      setSearchParams(searchParams);
      return newState;
   });
}
