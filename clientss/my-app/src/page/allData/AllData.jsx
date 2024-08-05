import React, { useState, useEffect } from 'react';
import DtaTable from './datatable/DtaTable';

const AllData = () => {
  const [cars, setCars] = useState([]);
  console.log(cars)
  const [filteredCars, setFilteredCars] = useState([]);
  const [carCriteria, setCarCriteria] = useState({ title: '', country: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/cars')
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setFilteredCars(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching car data:', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    const filtered = cars.filter((car) =>
      car.carName.toLowerCase().includes(carCriteria.carName.toLowerCase()) &&
      car.
      countery.toLowerCase().includes(carCriteria.country.toLowerCase())
      // Add more conditions based on your filter criteria
    );
    setFilteredCars(filtered);
  };

  const handleChange = (e) => {
    setCarCriteria({
      ...carCriteria,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="px-20">
      <div className="ml-36">
        <h2 className="text-2xl font-semibold mb-4">Data ({filteredCars.length})</h2>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            name="carName"
            placeholder="Search by car-Name"
            value={carCriteria.carName}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="country"
            placeholder="Search by Country"
            value={carCriteria.country}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {/* Add more input fields for additional filter criteria */}
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Search
          </button>
        </div>
        {loading ? (
          <span className="loading loading-ball loading-lg"></span>
        ) : (
          <div>
            {filteredCars.map((car) => (
              <DtaTable key={car.id} dta={car}></DtaTable>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllData;
