import React, { useState } from 'react';
import { buses, locations } from './data';
import TrainList from './TarinList';


export const Train = () => {
  const [search, setSearch] = useState({
    from: '',
    to: '',
    date: ''
  });
  const [filterTrain, setFilterTrain] = useState([]);

  const handleSearch = () => {
    setFilterTrain(
      buses.filter((data) =>
        data.source === search.from &&
        data.destination === search.to &&
        data.avilableDate.includes(search.date)
      )
    );
  };

  return (
   <div>

<div className="container mx-auto p-4">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold mb-4">Train Bookings</h1>

        <div className="flex flex-col items-center">
          <select
            className="border border-gray-300 p-2 rounded w-full max-w-md mb-4"
            value={search.from}
            onChange={(e) => setSearch((prevSearch) => ({
              ...prevSearch,
              from: e.target.value
            }))}
          >
            <option value="">Select departure location</option>
            {locations.map((data) => (
              <option key={`${data}-from`} value={data}>{data}</option>
            ))}
          </select>

          <select
            className="border border-gray-300 p-2 rounded w-full max-w-md mb-4"
            value={search.to}
            onChange={(e) => setSearch((prevSearch) => ({
              ...prevSearch,
              to: e.target.value
            }))}
          >
            <option value="">Select destination location</option>
            {locations.map((data) => (
              <option key={`${data}-to`} value={data}>{data}</option>
            ))}
          </select>

          <input
            type="date"
            className="border border-gray-300 p-2 rounded w-full max-w-md mb-4"
            value={search.date}
            onChange={(e) => setSearch((prevSearch) => ({
              ...prevSearch,
              date: e.target.value
            }))}
          />

          <button
            className="bg-blue-500 text-white p-2 rounded w-full max-w-md mb-4"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {filterTrain && filterTrain.length > 1 ? (
        filterTrain.map((train, index) => (
          <TrainList key={index} data={train} selectedDate={search.date} />
        ))
      ) : (
        <p className="text-center">No trains available for the selected route and date.</p>
      )}
    </div>

   </div>
  );
};
