import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { buses } from './data';

const SignupForm = () => {
  const location = useLocation();
  const { id } = useParams();
  const { selectedSeats, totalPrice, selectedDate } = location.state;
  const parsedDate = new Date(selectedDate);

  const [ticket, setTicket] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    passengerNames: Array(selectedSeats.length).fill('')
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePassengerNameChange = (index, value) => {
    const newPassengerNames = [...formData.passengerNames];
    newPassengerNames[index] = value;
    setFormData({
      ...formData,
      passengerNames: newPassengerNames
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {     
      formData,
      totalAmountToPay,
      selectedSeats,
      selectedDate,
      selectTrain
      

    };
    console.log('Form submitted:', data);
    setTicket(data);
    setIsSubmitted(true);
  };

  const formattedDate = parsedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const nextDate = new Date(parsedDate);
  nextDate.setDate(parsedDate.getDate() + 1);
  const formattedNextDate = nextDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const selectTrain = buses.find((data) => data.id === parseInt(id));

  const calculateAdditionalCharges = () => {
    const vatPerSeat = 40;
    const serviceChargePerSeat = 20;
    const smsChargePerTicket = 2;

    const totalVAT = vatPerSeat * selectedSeats.length;
    const totalServiceCharge = serviceChargePerSeat * selectedSeats.length;
    const totalSMSCharge = smsChargePerTicket * selectedSeats.length;

    return {
      totalVAT,
      totalServiceCharge,
      totalSMSCharge,
      totalAdditionalCharges: totalVAT + totalServiceCharge + totalSMSCharge
    };
  };

  const {
    totalVAT,
    totalServiceCharge,
    totalSMSCharge,
    totalAdditionalCharges
  } = calculateAdditionalCharges();

  const totalAmountToPay = totalPrice + totalAdditionalCharges;

  return (
    <div className='px-20'>
      <h1 className='text-4xl font-semibold text-green-800'>{selectTrain?.name}</h1>

      <div className='flex justify-between'>
        <div>
          <p>Departure</p>
          <span className='text-green-800 font-bold text-lg'>{selectTrain.source}</span>
          <p>
            <span>{formattedDate}</span> {selectTrain.departureTime}
          </p>
        </div>

        <div>
          <p>Destination</p>
          <span className='text-green-800 font-bold text-lg'>{selectTrain.destination}</span>
          <p>
            <span>{formattedNextDate}</span> {selectTrain.arrivalTime}
          </p>

          <p className='mt-2'>
            Selected Seat:
            {selectedSeats.map((seat, index) => (
              <span key={index} className='border ml-3 rounded-xl bg-green-500 p-2 text-white'>
                {seat}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className='flex mt-10 justify-between'>
        <div className='w-5/12'>
      
            <form onSubmit={handleSubmit} className='mt-4'>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-lg font-medium'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='border p-2 w-full'
                  required
                />
              </div>

              <div className='mb-4'>
                <label htmlFor='phoneNumber' className='block text-lg font-medium'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  id='phoneNumber'
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className='border p-2 w-full'
                  required
                />
              </div>

              <div className='mb-4'>
                <label htmlFor='email' className='block text-lg font-medium'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='border p-2 w-full'
                  required
                />
              </div>

              {selectedSeats.map((seat, index) => (
                <div key={index} className='mb-4'>
                  <label htmlFor={`passengerName-${index}`} className='block text-lg font-medium'>
                    Passenger Name for Seat {seat}
                  </label>
                  <input
                    type='text'
                    id={`passengerName-${index}`}
                    name={`passengerName-${index}`}
                    value={formData.passengerNames[index]}
                    onChange={(e) => handlePassengerNameChange(index, e.target.value)}
                    className='border p-2 w-full'
                    required
                  />
                </div>
              ))}

            {!isSubmitted && (
              <div className='flex justify-center'>
                <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
                  Submit
                </button>
              </div>
            )}
            </form>
         
          {isSubmitted && (
            <Link to={'/bookingTickets'} state={{ ticket }}>
              <div className='flex justify-center mt-4'>
                <button className='bg-green-500 text-white p-2 rounded'>
                 Go to and Collect your Tickets
                </button>
              </div>
            </Link>
          )}
        </div>

        <div className='w-6/12 bg-gray-100 rounded-lg p-6'>
          <div className='mb-4'>
            <p className='text-lg font-semibold'>Total Fare: ${totalPrice}</p>
            <p className='text-sm text-gray-600'>Including base fare for selected seats $20</p>
          </div>

          <div className='mb-4'>
            <p className='text-lg font-semibold'>VAT Included: ${totalVAT}</p>
            <p className='text-sm text-gray-600'>Value Added Tax per seat</p>
          </div>

          <div className='mb-4'>
            <p className='text-lg font-semibold'>Service Charge: ${totalServiceCharge}</p>
            <p className='text-sm text-gray-600'>Service charge per seat</p>
          </div>

          <div className='mb-4'>
            <p className='text-lg font-semibold'>SMS Charge: ${totalSMSCharge}</p>
            <p className='text-sm text-gray-600'>SMS charge per ticket</p>
          </div>

          <hr className='my-4' />

          <p className='text-xl font-semibold'>Total You Pay: ${totalAmountToPay}</p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
