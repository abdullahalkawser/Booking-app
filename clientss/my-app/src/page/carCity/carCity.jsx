import React from 'react';

const CarCity = () => {
  return (
    <div className='grid md:grid-cols-3 mt-10 px-20'>
      <div className=' w-96 image-full bg-cover bg-center' style={{backgroundImage: "url('/public/GettyImages-523538287-ezgif.com-webp-to-jpg-converter.jpg')"}}>
        <div className="card-body text-white">
          <h1 className='text-5xl font-bold mt-36'>USA</h1>
          <p className='text-3xl font-bold'>25 Properties</p>
        </div>
      </div>
      <div className=' w-96 image-full bg-cover bg-center' style={{backgroundImage: "url('/public/paris-big3-20170508215541.jpg')"}}>
        <div className="card-body text-white">
          <h1 className='text-5xl font-bold mt-36'>Peris</h1>
          <p className='text-3xl font-bold'>25 Properties</p>
        </div>
      </div>
      <div className=' w-96 image-full bg-cover bg-center' style={{backgroundImage: "url('/public/london-ezgif.com-webp-to-jpg-converter.jpg')"}}>
        <div className="card-body text-white">
          <h1 className='text-5xl font-bold mt-36  '>London</h1>
          <p className='text-3xl font-bold'>25 Properties</p>
        </div>
      </div>
      

     
    </div>
  );
}

export default CarCity;
