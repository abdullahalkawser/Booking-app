import FlightData from "./Flightcontent/flightdata/FlightData";

const FlightContent = () => {
  return (
    <div>
      <header>
        <div
          className="bg-center bg-cover h-[700px]"
          style={{
            backgroundImage:
              "url(https://content.presspage.com/uploads/2431/3029aa01-988c-4474-95f9-2e60df7a09ea/1920_network-lhr-082023.jpg?10000)",
          }}
        >
          <div className="w-full h-full absolute ">
            <div className=" mt-56 mr-72 text-white text-center">
              <p className="text-lg mb-2">Find the Best Deals on Flights</p>
              <h1 className="text-3xl font-semibold lg:text-5xl">
                Let the Journey Begin!
              </h1>
            </div>
          </div>
        </div>
      </header>
      <FlightData></FlightData>
    </div>
  );
};

export default FlightContent;
