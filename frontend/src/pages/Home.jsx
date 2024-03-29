import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
import Header from '../components/Header';

export default function Home() {
  const [imageIds, setImageIds] = useState();
  const loadImages = async () => {
    try {
      const res = await fetch('/api/images');
      const data = await res.json();
      setImageIds(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    loadImages();
  }, []);

  return (
    <div>
      <Header />
      <div className='gallery'>
        {imageIds &&
          imageIds.map((imageId, index) => (
            <Image
              key={index}
              cloudName='thanh2k3'
              publicId={imageId}
              width='300'
              crop='scale'
            />
          ))}
      </div>
    </div>
  );
}
