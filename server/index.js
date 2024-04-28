const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

const app = express();

// Connect to MongoDB Atlas cluster
mongoose.connect("mongodb+srv://allisonpeng10:Pandajojo25*@cluster0.5epcco7.mongodb.net/?\
retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB Atlas");
})
.catch((error) => {
  console.error("Error connecting to MongoDB Atlas:", error);
});

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "hi guys i'm tired" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});