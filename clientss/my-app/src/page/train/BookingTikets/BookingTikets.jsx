import React from 'react';
import { useLocation } from 'react-router-dom';

const BookingTikets = () => {
    const location = useLocation();
    const { ticket } = location.state;

    // Destructure properties from ticket object
    const { formData, totalAmountToPay, selectedSeats, selectedDate, selectTrain } = ticket;

    return (
        <div className='px-20'>
            <div className=" shadow-lg rounded-md p-4 ">
                <div className="flex justify-between items-center ">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Bangladesh Railway E-Ticket
                    </h2>
                    <div className="flex items-center ">
                        {/* Replace with your actual image source */}
                        <img 
                            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbn.wikipedia.org%2Fwiki%2F%25E0%25A6%25AC%25E0%25A6%25BE%25E0%25A6%2582%25E0%25A6%25B2%25E0%25A6%25BE%25E0%25A6%25A6%25E0%25A7%2587%25E0%25A6%25B6_%25E0%25A6%25B0%25E0%25A7%2587%25E0%25A6%25B2%25E0%25A6%2593%25E0%25A6%25AF%25E0%25A6%25BC%25E0%25A7%2587&psig=AOvVaw0UHEN9hgpraxSwujkVtZW-&ust=1720470886943000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNC26tTjlYcDFQAAAAAdAAAAABAE" 
                            alt="Railway Logo"
                            className="w-16 h-16" 
                        />
                    </div>
                </div>
                <hr className="my-4 border-gray-300" />
                <table className="table-auto w-full">
                    <tbody>
                        <tr>
                            <td className='p-2 font-bold text-gray-700'>Issue Date & Time:</td>
                            <td className='p-2'>{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</td>
                        </tr>
                        <tr>
                            <td className='p-2 font-bold text-gray-700'>Journey Date & Time:</td>
                            <td className='p-2'>{selectedDate}</td>
                        </tr>
                        <tr>
                            <td className='p-2 font-bold text-gray-700'>Train Name & Number:</td>
                            <td className='p-2'>{selectTrain.name} ({selectTrain.number})</td>
                        </tr>
                        <tr>
                            <td className='p-2 font-bold text-gray-700'>From Station:</td>
                            <td className='p-2'>{formData.fromStation}</td>
                        </tr>
                        <tr>
                            <td className='p-2 font-bold text-gray-700'>To Station:</td>
                            <td className='p-2'>{formData.toStation}</td>
                        </tr>
                        <tr>
                            <td className='p-2 font-bold text-gray-700'>Class Name:</td>
                            <td className='p-2'>{formData.className}</td>
                        </tr>
                        <tr>
                            <td className='p-2 font-bold text-gray-700'>Coach Name / Seat:</td>
                            <td className='p-2'>{formData.coachName} ({formData.seat})</td>
                        </tr>
                        <tr>
                            <td className='p-2 font-bold text-gray-700'>No. of Seats:</td>
                            <td className='p-2'>{selectedSeats.length}</td>
                        </tr>
                        <tr>
                            <td className='p-2 font-bold text-gray-700'>No. of Adult Passenger(s):</td>
                            <td className='p-2'>{formData.adultPassengers}</td>
                        </tr>
                        <tr>
                            <td className='p-2 font-bold text-gray-700'>No. of Child Passenger(s):</td>
                            <td className='p-2'>{formData.childPassengers}</td>
                        </tr>
                        <tr>
                            <td className='p-2 font-bold text-gray-700'>Fare:</td>
                            <td className='p-2'>BDT {formData.fare}</td>
                        </tr>
                        <tr>
                            <td className='p-2 font-bold text-gray-700'>VAT:</td>
                            <td className='p-2'>BDT {formData.vat}</td>
                        </tr>
                        <tr>
                            <td className='p-2 font-bold text-gray-700'>Service Charge:</td>
                            <td className='p-2'>BDT {formData.serviceCharge}</td>
                        </tr>
                        <tr>
                            <td className='p-2 font-bold text-gray-700'>Total Fare:</td>
                            <td className='p-2'>BDT {totalAmountToPay}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-4">
                    <h3 className="text-lg font-bold text-gray-700">Passenger Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="font-bold text-gray-700">Passenger Name:</p>
                            <p>{formData.name}</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700">Identification Type:</p>
                            <p>{formData.idType}</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700">Identification Number:</p>
                            <p>{formData.idNumber}</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700">Mobile Number:</p>
                            <p>{formData.mobileNumber}</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700">PNR Number:</p>
                            <p>{formData.pnrNumber}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <img 
                        src="/qr-code.png" 
                        alt="QR Code"
                        className="w-32 h-32"
                    />
                </div>
           
            </div>
        </div>
    );
}

export default BookingTikets;
