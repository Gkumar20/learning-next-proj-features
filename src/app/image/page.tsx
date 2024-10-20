import Image from 'next/image';
import React from 'react';
import VercelImg from '../../../public/rupee-svgrepo-com.svg';
import { Metadata } from 'next';

function ImagePage() {
  return (
    <div style={{ position: 'relative', width: '500px', height: '500px' }}>
      {/* Local image */}
      <Image
        src={VercelImg}
        alt="doesn't load"
        width={100}
        height={100}
      />

      {/* Remote image used as a background */}
      <div style={{ position: 'relative', width: '500px', height: '500px', zIndex: -1 }}>
        <Image
          src="https://cubanvr.com/wp-content/uploads/2023/07/ai-image-generators.webp"
          alt="Remote Background Image"
          fill
          sizes='300'
          style={{ objectFit: 'cover', opacity: 0.3 }} 
        />
      </div>
    </div>
  );
}

export default ImagePage;


// Metadata function
export const generateMetadata = (): Metadata => {
  return {
    title: 'Image Page Title',
    description: 'This is a dynamic description',
  };
};
