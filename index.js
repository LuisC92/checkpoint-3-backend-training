const express = require("express");
const connection = require("./config");
const morgan = require("morgan");
const albumRoute = require("./routes/album-route")
const trackRoute = require("./routes/track-route")
const port = process.env.PORT || 5001;
const app = express();


connection.connect((err) => {
    if (err) throw err;
    console.log("Successfully connected to the database");
});

app.use(express.json());
app.use(morgan(""));
app.use("/album", albumRoute);
app.use("/track", trackRoute);

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`App is listening at ${port}`);
});
