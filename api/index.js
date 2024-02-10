// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer"); // Add this line
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [`${process.env.ORIGIN_CLIENT}`, `${process.env.ORIGIN_ADMIN}`],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json());

// Routes
// Admin Login
// Admin login
app.post("/admin/login", (req, res) => {
  const { username, password } = req.body;

  db.query(
    "SELECT * FROM Admins WHERE Username = ?",
    [username],
    async (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).send("Internal Server Error");
      } else {
        if (results.length > 0) {
          const hashedPassword = results[0].Password;

          // Compare the provided password with the hashed password
          const passwordMatch = await bcrypt.compare(password, hashedPassword);

          if (passwordMatch) {
            // Generate a JWT token
            const token = jwt.sign(
              { username: results[0].Username },
              `${process.env.JWT_TOKEN}`,
              { expiresIn: "1d" }
            );

            // Set the token in the response headers
            res.cookie("token", token);

            // Send the token in the response
            res.status(200).json({ token });
          } else {
            res.status(401).send("Invalid credentials");
          }
        } else {
          res.status(401).send("Invalid credentials");
        }
      }
    }
  );
});
app.put("/admin/update", async (req, res) => {
  const { newUsername, newPassword } = req.body;

  try {
    // Hash the new password securely before storing it in the database
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the admin's username and password in the database
    db.query(
      "UPDATE Admins SET Username = ?, Password = ? WHERE AdminId = 1",
      [newUsername, hashedPassword],
      (err, results) => {
        if (err) {
          console.error("Error updating admin credentials:", err);
          res.status(500).send("Internal Server Error");
        } else {
          res.status(200).send("Admin credentials updated successfully");
        }
      }
    );
  } catch (error) {
    console.error("Error hashing new password:", error);
    res.status(500).send("Internal Server Error");
  }
});
// Create Admin
app.post("/admin/create", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Hash the password securely before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO Admins (Username, Password) VALUES (?, ?)",
      [username, hashedPassword],
      (err, results) => {
        if (err) {
          console.error("Error executing query:", err);
          res.status(500).send("Internal Server Error");
        } else {
          res.status(201).send("Admin created successfully");
        }
      }
    );
  } catch (error) {
    console.error("Error hashing password:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Insert Subscriber
app.post("/subscribers/insert", (req, res) => {
  const { FirstName, LastName, Email, Phone, Comment, Chosen, AdminId } =
    req.body;

  db.query(
    "INSERT INTO Subscribers (FirstName, LastName, Email, Phone, Comment, Chosen, AdminId) VALUES (?, ?, ?, ?, ?, false, 1)",
    [FirstName, LastName, Email, Phone, Comment, Chosen, AdminId],
    (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(201).send("Subscriber inserted successfully");
      }
    }
  );
});
// Get Subscribers
app.get("/subscribers", (req, res) => {
  db.query("SELECT * FROM Subscribers", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});
// Get Chosen Subscribers
app.get("/subscribers/chosen", (req, res) => {
  db.query("SELECT * FROM Subscribers WHERE Chosen = true", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});

// Update Subscriber
// Assuming Express.js is used for the server
// Assuming Express.js is used for the server
app.put("/subscribers/update/:id", async (req, res) => {
  const subscriberId = req.params.id;
  const { Chosen } = req.body;

  try {
    // Update the Chosen status in the database based on subscriberId
    // For example, if using your MySQL setup:
    db.query(
      "UPDATE Subscribers SET Chosen = ? WHERE SubscriberId = ?",
      [Chosen, subscriberId],
      (err, results) => {
        if (err) {
          console.error("Error updating chosen status:", err);
          res.status(500).send("Internal Server Error");
        } else {
          res.status(200).send("Chosen status updated successfully");
        }
      }
    );
  } catch (error) {
    console.error("Error updating chosen status:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.delete("/subscribers/remove/:id", async (req, res) => {
  const subscriberId = req.params.id;

  try {
    // Implement the logic to remove the subscription based on subscriberId
    // For example, if using your MySQL setup:
    db.query(
      "DELETE FROM Subscribers WHERE SubscriberId = ?",
      [subscriberId],
      (err, results) => {
        if (err) {
          console.error("Error removing subscription:", err);
          res.status(500).send("Internal Server Error");
        } else {
          res.status(200).send("Subscription removed successfully");
        }
      }
    );
  } catch (error) {
    console.error("Error removing subscription:", error);
    res.status(500).send("Internal Server Error");
  }
});
//
app.post("/send-email", async (req, res) => {
  const {
    serviceType,
    serviceDate,
    destination,
    adults,
    children,
    fullName,
    birthDate,
    idPassportNumber,
    phoneNumber,
    email,
    europeDestination,
  } = req.body;

  // Your email configuration
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mekahalc@gmail.com",
      pass: "hpfvwsbtqmkcbyne",
    },
  });

  const mailOptions = {
    from: "mekahalc@gmail.com",
    to: "c.mekahal.mi@lagh-univ.dz", // Replace with your desired destination email
    subject: "Nouvelle demande de service de voyage",
    html: `
      <p>Type de service: ${serviceType}</p>
      <p>Date de service: ${serviceDate}</p>
      ${serviceType === "Omra" ? "" : `<p>Destination: ${destination}</p>`}
      ${
        europeDestination
          ? `<p>Destination en Europe: ${europeDestination}</p>`
          : ""
      }
      <p>Adultes: ${adults}</p>
      <p>Enfants: ${children}</p>
      <p>Nom et prénom: ${fullName}</p>
      <p>Date de naissance: ${birthDate}</p>
      <p>Numéro de ID ou passeport: ${idPassportNumber}</p>
      <p>Numéro de téléphone: ${phoneNumber}</p>
      <p>Email: ${email}</p>
    `,
  };
  console.log(europeDestination);
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/send-question-email", async (req, res) => {
  const { firstName, lastName, emailC, question } = req.body;

  // Your email configuration
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mekahalc@gmail.com",
      pass: "hpfvwsbtqmkcbyne",
    },
  });

  const mailOptions = {
    from: "mekahalc@gmail.com",
    to: "c.mekahal.mi@lagh-univ.dz", // Replace with your desired destination email
    subject: "Commentaire ou une question",
    html: `
      <p>Prénom: ${firstName}</p>
      <p>Nom: ${lastName}</p>
      <p>Email: ${emailC}</p>
      <p>Question: ${question}</p>
    `,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/subscriber-send-email", async (req, res) => {
  const { firstName, lastName, email, telephone, question } = req.body;

  // Your email configuration
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mekahalc@gmail.com",
      pass: "hpfvwsbtqmkcbyne",
    },
  });

  const mailOptions = {
    from: "mekahalc@gmail.com",
    to: "c.mekahal.mi@lagh-univ.dz", // Replace with your desired destination email
    subject: "Nouvel abonné",
    html: `
      <p>Prénom: ${firstName}</p>
      <p>Nom: ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Téléphone: ${telephone}</p>
      <p>Commentaire: ${question}</p>
    `,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
