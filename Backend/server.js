import express from "express";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables


const app = express();
const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome To the Server of Theism-HealthCheckups</h1>");
});

app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`);
});