import React from 'react';
import SingIn from './SingIn';

const Profile: React.FC = ({}) => {
   return (
      <div className="flex border-t pt-20 xs:pt-10 xs:my-5 flex-col items-center w-full h-96 my-10">
         <SingIn />
      </div>
   );
};

export default Profile;
