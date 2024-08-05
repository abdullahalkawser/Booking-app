import React from 'react'
import img1 from '../../../public/1.jpg'
import img2 from '../../../public/2.jpg'
import img3 from '../../../public/3.jpg'
import img4 from '../../../public/4.jpg'


const GustCar = () => {
  return (
    <div className='px-20 mb-16'>

      <h1 className='text-xl font-bold'> Love Your Car</h1>

      <div className='flex justify-around gap-4'>

      <div className="card bg-base-100 shadow-xl">
  <figure><img className=' w-96 h-56' src={img1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 >
      Lamborgini

    </h2>
    <p>Canada</p>
   <p>Starting From $ 1120</p>

   <p>4.5 <span>Excellant</span></p>
  </div>
</div>
<div className="card  bg-base-100 shadow-xl">
  <figure><img className=' w-96 h-56'   src={img2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 >
      Hotel

    </h2>
    <p>Canada</p>
   <p>Starting From $ 1120</p>

   <p>4.5 <span>Excellant</span></p>
  </div>
</div>
<div className="card bg-base-100 shadow-xl">
  <figure><img className=' w-96 h-56' src={img3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 >
      Flight

    </h2>
    <p>Canada</p>
   <p>Starting From $ 1120</p>

   <p>4.5 <span>Excellant</span></p>
  </div>
</div>
<div className="card bg-base-100 shadow-xl">
  <figure><img className=' w-96 h-56' src={img4} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 >
      Lamborgini

    </h2>
    <p>Canada</p>
   <p>Starting From $ 1120</p>

   <p>4.5 <span>Excellant</span></p>
  </div>
</div>



      </div>
  
    </div>
  )
}

export default GustCar