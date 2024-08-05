import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { buses } from './data';

const TrainTicket = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const location = useLocation();

  const { id } = useParams();
  const selectedDate = location.state?.selectedDate || 'Date not showing';
  console.log(selectedDate);
  const selectTrain = buses.find((data) => data.id === parseInt(id));
  const seatPrice = selectTrain ? selectTrain.price : 0;
 


  const selectSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else if (selectedSeats.length < 4) {
      if (!fakeSeat(seat)) {
        alert('This seat is already booked!');
      } else {
        setSelectedSeats([...selectedSeats, seat]);
      }
    } else {
      alert('You can select a maximum of 4 seats');
    }
  };

  const fakeSeat = (seat) => {
    if (!selectTrain) return false;
    return selectTrain.avilableseat.includes(seat);
  };

  const SeatGenerator = ({ seats, keyPrefix = "" }) => {
    return (
      <div className="flex flex-wrap gap-2">
        {seats.map((seat, index) => (
          Array.isArray(seat) ? (
            <div key={`${keyPrefix}-${index}`} className="flex gap-1">
              {seat.map((subSeat, subIndex) => (
                <span
                  key={`${keyPrefix}-${index}-${subIndex}`}
                  className={`block border border-gray-300 p-3 rounded-2xl ${subSeat === 'A' ? 'bg-slate-200' :
                    subSeat === 'B' ? 'bg-orange-400 text-white' :
                      'bg-green-500 text-white'
                    }`}
                  style={{
                    backgroundColor: selectedSeats.includes(subSeat) ? 'blue' : !fakeSeat(subSeat) ? 'red' : '',
                    cursor: !fakeSeat(subSeat) ? 'not-allowed' : 'pointer'
                  }}
                  onClick={() => {
                    if (fakeSeat(subSeat)) {
                      selectSeat(subSeat);
                    }
                  }}
                >
                  {subSeat}
                </span>
              ))}
            </div>
          ) : (
            <span
              key={`${keyPrefix}-${index}`}
              className={`block border border-gray-300 p-3 rounded-2xl ${seat === 'A' ? 'bg-slate-200' :
                seat === 'B' ? 'bg-orange-400 text-white' :
                  'bg-green-500 text-white'
                }`}
              style={{
                backgroundColor: selectedSeats.includes(seat) ? 'blue' : !fakeSeat(seat) ? 'red' : '',
                cursor: !fakeSeat(seat) ? 'not-allowed' : 'pointer'
              }}
              onClick={() => {
                if (fakeSeat(seat)) {
                  selectSeat(seat);
                }
              }}
            >
              {seat}
            </span>
          )
        ))}
      </div>
    );
  };

  const totalPrice = selectedSeats.length * seatPrice;

  return (
    <div>
      <h1 className='text-3xl font-semibold'>{selectTrain?.name}</h1>
      <div className='flex gap-2 justify-center'>
        <span className='flex gap-2'>
          <h2>Available -</h2>
          <p className="flex justify-center items-center w-5 h-5 bg-green-600 text-white rounded-full">1</p>
        </span>
        <span className='flex gap-2'>
          <h2>Booked -</h2>
          <p className="flex justify-center items-center w-5 h-5 text-white bg-red-600 rounded-full">1</p>
        </span>
        <span className='flex gap-2'>
          <h2>Selected -</h2>
          <p className="flex justify-center items-center w-5 h-5 text-white bg-blue-500 rounded-full">{selectedSeats.length}</p>
        </span>
      </div>
      <div className='flex justify-evenly px-20'>
        <div>
          {selectTrain && Array.isArray(selectTrain.s_chair) ? (
            <div>
              <h2 className='text-xl font-semibold mt-4'>S Chair</h2>
              <SeatGenerator seats={selectTrain.s_chair} keyPrefix="s_chair" />
            </div>
          ) : (
            <p>No seat layout available for S Chair</p>
          )}
          {selectTrain && Array.isArray(selectTrain.ac_chair) ? (
            <div>
              <h2 className='text-xl font-semibold mt-4'>AC Chair</h2>
              <SeatGenerator seats={selectTrain.ac_chair} keyPrefix="ac_chair" />
            </div>
          ) : (
            <p>No seat layout available for AC Chair</p>
          )}
          {selectTrain && Array.isArray(selectTrain.sinigdha) ? (
            <div>
              <h2 className='text-xl font-semibold mt-4'>SINIGDHA</h2>
              <SeatGenerator seats={selectTrain.sinigdha} keyPrefix="sinigdha" />
            </div>
          ) : (
            <p>No seat layout available for SINIGDHA</p>
          )}
        </div>
        <div className='bg-red-500 p-10 text-white rounded-2xl w-96'>
          <h2 className='text-xl font-semibold mt-4'>Selected Seats</h2>
          {selectedSeats.length > 0 ? (
            <div>
              <h1>Seats: {selectedSeats.length}</h1>
              <h3>Seat num: {selectedSeats.join(", ")}</h3>
              <h3>Total Price: ${totalPrice}</h3>
              <Link to={`/train/book/${id}`} state={{
                selectedSeats: selectedSeats,
                totalPrice: totalPrice,
                selectedDate: selectedDate
              }}>
                <button className='btn w-full' disabled={selectedSeats.length === 0}>Book Now</button>
              </Link>
            </div>
          ) : (
            <p>No seats selected</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainTicket;
