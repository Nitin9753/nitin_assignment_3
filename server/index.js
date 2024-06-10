const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require("./routes/userRoutes");
const cors = require('cors');
const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT || 8500;
app.use(cors());
app.use(express.json());
app.use("/api/v1/user", userRoutes);
app.listen(PORT, () => {
    console.log('server started', PORT);
})