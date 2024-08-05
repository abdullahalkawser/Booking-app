import { Link } from 'react-router-dom';


const Baner = () => {

  



  return (
    <div className='bg-cyan-500 md:px-20 py-10 '>
      <div className='content'>
        <ul className='flex  gap-20 '>
       <Link to={'/flight'}> <li className='text-base text-white font-semibold'>Flight-Booking</li></Link>
        <Link to={'/car'}> <li className='text-base text-white font-semibold'>Car-Booking</li></Link>
       <Link to={'/hotel'}>   <li className='text-base text-white font-semibold'>Hotel-Booking</li></Link>
         <Link to={'/tain'} > <li className='text-base text-white font-semibold'>Train-Ticket</li></Link>
    
        </ul>
        <div className='text-white  space-y-6 py-5 '>
          <h1 className='text-4xl font-bold '>A life Time Of Discount ? Its Genius..</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod tenetur ullam enim eligendi at eum voluptatum commodi, quas mollitia! Nobis, voluptatibus atque ratione sapiente ab aperiam nulla ea possimus!Lorem
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa atque porro consequuntur sit quis, ab est voluptatum non harum voluptates accusantium minima fugit tempora. Est optio sit autem iure nihil.
          </p>
        </div>
      </div>
  


    </div>
  );
}

export default Baner;
