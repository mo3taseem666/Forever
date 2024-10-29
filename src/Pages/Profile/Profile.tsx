import React, { useState } from 'react';
import SingIn from './SingIn';
import SignUp from './SignUp';

const Profile: React.FC = ({}) => {
   const [login,setLogin] = useState(true)
   return (
      <div className="flex border-t pt-20 xs:pt-10 xs:my-5 flex-col items-center w-full mb-12 mt-5">
         {login ? <SingIn setLogin={setLogin} /> : <SignUp setLogin={setLogin} />}
      </div>
   );
};

export default Profile;
