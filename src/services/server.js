const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const dbPath = path.join(__dirname, "db.json");

app.use(cors());
app.use(bodyParser.json());

// GET all cars
app.get("/cars", (req, res) => {
  fs.readFile(dbPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file: ", err);
      res.status(500).json({ error: "Error reading data file" });
      return;
    }

    const cars = JSON.parse(data).cars;
    res.json(cars);
  });
});

// GET a specific car by id
app.get("/cars/:id", (req, res) => {
  const carId = parseInt(req.params.id);

  fs.readFile(dbPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file: ", err);
      res.status(500).json({ error: "Error reading data file" });
      return;
    }

    const cars = JSON.parse(data).cars;
    const car = cars.find((car) => car.id === carId);

    if (car) {
      res.json(car);
    } else {
      res.status(404).json({ error: "Car not found" });
    }
  });
});


// POST a new car
app.post("/cars", (req, res) => {
  fs.readFile(dbPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file: ", err);
      res.status(500).json({ error: "Error reading data file" });
      return;
    }

    const cars = JSON.parse(data).cars;
    const newCar = {
      ...req.body,
      id: Date.now(), // Generate a unique id (you may have a better strategy)
    };

    cars.push(newCar);

    fs.writeFile(dbPath, JSON.stringify({ cars }, null, 2), "utf8", (err) => {
      if (err) {
        console.error("Error writing file: ", err);
        res.status(500).json({ error: "Error writing data file" });
        return;
      }

      res.json(newCar);
    });
  });
});



// DELETE a car by id
app.delete("/cars/:id", (req, res) => {
  const carId = parseInt(req.params.id);

  fs.readFile(dbPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file: ", err);
      res.status(500).json({ error: "Error reading data file" });
      return;
    }

    let cars = JSON.parse(data).cars;
    const initialLength = cars.length;
    cars = cars.filter((car) => car.id !== carId);

    if (cars.length < initialLength) {
      fs.writeFile(dbPath, JSON.stringify({ cars }, null, 2), "utf8", (err) => {
        if (err) {
          console.error("Error writing file: ", err);
          res.status(500).json({ error: "Error writing data file" });
          return;
        }

        res.json({ message: "Car deleted successfully" });
      });
    } else {
      res.status(404).json({ error: "Car not found" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});