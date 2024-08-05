import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../page/Home';
import Login from '../page/Login/Login';
import Register from '../page/register/register';
import AllData from '../page/allData/AllData';
import DashBOrd from '../page/DashBoard/DashBord';
import AddItems from '../page/DashBoard/addItems/AddItems';
import DataDetails from '../page/allData/dataDteils/DataDetails';
import Payments from '../page/DashBoard/payment/Pamayment';
import { Flight } from '../page/Flight/Flight';
import { Hotel } from '../page/Hotel/Hotel';
import { Train } from '../page/train/Train';
import BookDetails from '../page/DashBoard/BookingDetails/BookDetails';



import SeatBookingS from '../page/train/seatBooking';
import PrivateRoute from './privateRoute';
import TrainTicket from '../page/train/TarinTiket';
import BookingTikets from '../page/train/BookingTikets/BookingTikets';


const routes = createBrowserRouter(

  [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
  
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
     
      {
        path: '/car',
        element: <AllData />,
      },
      {
        path: '/flight',
        element: <Flight />,
      },
      {
        path: '/hotel',
        element: <Hotel />,
      },
      {
        path: '/tain',
   
        element: <PrivateRoute><Train /></PrivateRoute>,
      },
      {
        path: '/train/:id',
        element: <TrainTicket
/>,
       
      },
      {
        path: '/train/book/:id',
        element: <SeatBookingS></SeatBookingS>

        
  
       
      },
      {
        path: '/bookingTickets',
        element: <BookingTikets></BookingTikets>

        
  
       
      },

    

      {
        path: '/payments',
        element: <Payments />,
      },
      {
        path: "/details/:id",
        element: <DataDetails />,
        loader: ({ params }) => fetch(`http://localhost:3000/details/${params.id}`),
      },

      {
        path: '/dashbord',
        element: <DashBOrd />,
        children: [
          {
            path: 'additem',
            element: <AddItems />,
          },
          {
            path: '/dashbord/cart',
            element: < BookDetails/>,
          },
        ],
      },
    ],
  },
]);

export default routes;
