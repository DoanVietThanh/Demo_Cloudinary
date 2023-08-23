import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex justify-around mt-4'>
      <div>Cloudinary</div>
      <div className='flex gap-4'>
        <Link to='/'>Home</Link>
        <Link to='/upload'>Upload</Link>
      </div>
    </div>
  );
};

export default Header;
