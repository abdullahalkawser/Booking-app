import React from 'react';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom'; 

const TrainList = ({ data, selectedDate }) => {
  console.log(selectedDate);
  return (
    <div className='border border-r-gray-300 p-4 rounded mb-4 text-center'>
      <h2 className='text-xl font-semibold mb-2'>{data.name}</h2>
      <div className='flex justify-between'>
        <span>
          <p>Departure</p>
          <p>{data.source} <br /> <span>{data.departureTime}</span></p>
        </span>
        <FaArrowRightArrowLeft className='w-[800px]' />
        <span>
          <p>Date: {selectedDate}</p>
          <p>Arrival</p>
          <p>{data.destination}<br /> <span>{data.arivalTime}</span></p>
        </span>
      </div>
      <div className='flex justify-center gap-5 mt-7 text-center'>
        <div className="w-44 h-48 bg-slate-300 shadow-xl p-4">
          <div className="text-center">
            <h2 className="card-title uppercase px-5">S_CHAIR</h2>
            <p>{data.price}</p>
            <p>Available Tickets (Counter + Online)</p>
            <p>{data.s_chair.length}</p>
            <div className='mt-3'>
              <Link to={`/train/${data.id}`} state={{ selectedDate }}>
                <button className="bg-green-700 text-white px-2 rounded-xl">BOOK NOW</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-44 h-48 bg-slate-300 shadow-xl p-4">
          <div className="text-center">
            <h2 className="card-title uppercase">SINIGDHA</h2>
            <p>{data.price}</p>
            <p>Available Tickets (Counter + Online)</p>
            <p>{data.sinigdha.length}</p>
            <div className='mt-3'>
              <Link to={`/train/${data.id}`} state={{ selectedDate }}>
                <button className="bg-green-700 text-white px-2 rounded-xl">BOOK NOW</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-44 h-48 bg-slate-300 shadow-xl p-4">
          <div className="text-center">
            <h2 className="card-title">AC_CHAIR</h2>
            <p>{data.price}</p>
            <p>Available Tickets (Counter + Online)</p>
            <p>{data.ac_chair.length}</p>
            <div className='mt-3'>
              <Link to={`/train/${data.id}`} state={{ selectedDate }}>
                <button className="bg-green-700 text-white px-2 rounded-xl">BOOK NOW</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainList;
