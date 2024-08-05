import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { AuthContext } from '../../../provider/Provider';
import Swal from 'sweetalert2';
import { FaLocationDot } from "react-icons/fa6";
import { SiBandsintown } from "react-icons/si";
import { SiSubtitleedit } from "react-icons/si";
import { BsBroadcastPin } from "react-icons/bs";
import { IoColorFilter } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { IoIosPricetags } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";



import { FaCarSide } from "react-icons/fa";

const DataDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleSelect = (ranges) => {
    setSelectedRange(ranges.selection);
  };

  const startDate = selectedRange.startDate;
  const endDate = selectedRange.endDate;
  const dayCount = startDate && endDate ? Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) : 0;

  const handleSubmitBooking = async () => {
    try {
      const booking = {
        email: user.email,
        car: data.carName,
        country: data.country,
        startDate: startDate && startDate.toDateString(),
        endDate: endDate && endDate.toDateString(),
        totalPrice: data.price * dayCount
      };

      const response = await fetch(`http://localhost:3000/bookings`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(booking)
      });

      const responseData = await response.json();

      if (responseData.acknowledged === true) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Data is submitted',
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className='px-20'>


      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {data.image.imageUrl.map((img, index) => (

          <img className='w-full h-full' src={img} alt="" />

        ))}

      </div>


      <div className='mt-10'>
        <span className='flex text-2xl  gap-6 font-mono font-semibold'>

          <p className='flex items-center gap-2'> <FaCarSide className='text-red-600' /> {data.carName}</p>

          <p className='flex items-center gap-2'> <FaLocationDot className='text-red-600' />  {data.location}</p>
          <p className='flex items-center gap-2'> <SiBandsintown className='text-red-600' />{data.city}</p>
          <p className='flex items-center gap-2'> <SiSubtitleedit className='text-red-600' />{data.Title}</p>
        </span>
        <span className='flex text-2xl  gap-6 font-mono font-semibold mt-5'>

          <p className='flex items-center gap-2 '><IoIosPricetags className='text-red-600'/> ${data.price}</p>

          <p className='flex items-center gap-2 '><BsBroadcastPin className='text-red-600'/>  {data.
            Milege
          } K.M</p>
            <p className='flex items-center gap-2 '><IoColorFilter className='text-red-600'/>  {data.Colour }</p>
          <p className='flex items-center gap-2 '><CiDiscount1 className='text-red-600'/> {data.Discout}</p>
          <p className='flex items-center gap-2'><MdAirlineSeatReclineNormal className='text-red-600'/> {data.Seat}</p>
          <p className='flex items-center gap-2'><FaStarHalfAlt  className='text-yellow-500'/> {data.
Retings}</p>
        </span>

        <p>Description: {data.description}</p>

        <div className='mt-10'> 
        <h3 className='text-3xl font-serif font-semibold text-red-500'>Car Fesilitys</h3>

<div className='grid grid-cols-5'>


{
data.amenities.map((aminity)=>(

<li className='text-slate-600'>{aminity}</li>
))
}

</div>
        </div>






      </div>

      <div className='flex justify-evenly'>
        <div className='mt-40'>
          <h2>{dayCount > 1 ? `${dayCount} DAYS` : `${dayCount} Day`}</h2>
          <h2>{`$${data.price} * ${dayCount} DAY`}</h2>
          <h2>Total price: {data.price * dayCount}</h2>
          <p>Start Day: {startDate ? startDate.toLocaleString(undefined, { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }) : "Not selected"}</p>
          <p>Last Day: {endDate ? endDate.toLocaleString(undefined, { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }) : "Not selected"}</p>
          <Link to={'/payments'}>
            <button onClick={handleSubmitBooking} className="px-10 btn btn-outline">Order</button>
          </Link>
        </div>

        <div>
          <h2>How long do you want to stay?</h2>
          <DateRange ranges={[selectedRange]} onChange={handleSelect} />
        </div>
      </div>
    </div>
  );
}

export default DataDetails;
