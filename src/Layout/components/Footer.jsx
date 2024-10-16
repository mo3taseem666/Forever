import React from 'react';
import Left from './mini components/footer/Left';
import Middle from './mini components/footer/Middle';
import Right from './mini components/footer/Right';
import Copyright from './mini components/footer/Copyright';

export default function Footer() {
   return (
      <footer className="flex flex-col">
         <div className="flex mt-40 justify-between">
            <Left />
            <Middle />
            <Right />
         </div>
         <Copyright />
      </footer>
   );
}