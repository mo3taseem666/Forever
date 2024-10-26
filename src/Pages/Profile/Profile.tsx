import React from 'react';
import SingIn from './SingIn';

const Profile: React.FC = ({}) => {
   return (
      <div className="flex border-t pt-20 flex-col items-center w-full h-96 mt-10">
         <SingIn />
      </div>
   );
};

export default Profile;
