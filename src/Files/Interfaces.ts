export interface Product {
   _id: number;
   name: string;
   price: number;
   image: string[];
   subCategory: string;
   category: string;
}

export interface CheckedItems {
   category: string[];
   type: string[];
}
export interface Props {
   filterName: string;
   choices: string[];
   setCkeckedItems: React.Dispatch<
      React.SetStateAction<{ category: string[]; type: string[] }>
   >;
   checkedItems: { category: string[]; type: string[] };
   id: string;
}

export interface checkedItemsState {
   category: string[];
   type: string[];
}

export interface SignUpData {
   email : string,
   fullName: string,
   password:string ,
   phoneNumber : string
}