import React from 'react';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <div className='p-3 shadow-sm flex'>
      <div className="ml-auto">
        <Button className="">Sign In</Button>
      </div>
    </div>
  );
};

export default Header;
