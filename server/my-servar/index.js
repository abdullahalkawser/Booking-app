require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const db = client.db('carBookind');
    const cars = db.collection('cars');
    const bookings = db.collection('bookinsCar');

    app.post('/carpost', async (req, res) => {
      try {
        const carData = req.body;
        const insertedCar = await cars.insertOne(carData);
        res.json(insertedCar);
      } catch (error) {
        console.error('Error inserting document:', error);
        res.status(500).json({ error: 'An error occurred while inserting document' });
      }
    });

    app.get('/cars', async (req, res) => {
      try {
        const allCars = await cars.find().toArray();
        res.json(allCars);
      } catch (error) {
        console.error('Error fetching cars:', error);
        res.status(500).json({ error: 'An error occurred while fetching cars' });
      }
    });

    app.get('/details/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const details = await cars.findOne(query);
        res.json(details);
      } catch (error) {
        console.error('Error fetching car details:', error);
        res.status(500).json({ error: 'An error occurred while fetching car details' });
      }
    });

    app.post('/bookings', async (req, res) => {
      try {
        const bookingData = req.body;
        const insertedBooking = await bookings.insertOne(bookingData);
        res.json(insertedBooking);
      } catch (error) {
        console.error('Error inserting booking:', error);
        res.status(500).json({ error: 'An error occurred while inserting booking' });
      }
    });

    app.get('/bookings', async (req, res) => {
      try {
        const email = req.query.email;
        const query = { email: email };
        const userBookings = await bookings.find(query).toArray();
        res.json(userBookings);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ error: 'An error occurred while fetching bookings' });
      }
    });

    await client.db('admin').command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
