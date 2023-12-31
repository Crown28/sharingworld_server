//import package

const express = require("express");
const mongoose = require('mongoose');
//import files
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

const PORT = process.env.PORT || 3000;
const app = express();
const DB ="mongodb+srv://Beube:qmqp1234!@cluster0.l6h5uko.mongodb.net/?retryWrites=true&w=majority"


//middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);



//create api
//get, put, post, delete, update CRUD

//connection
mongoose
.connect(DB)
.then(() => {
  console.log("Connection Successful");
})
.catch((e) => {
  console.log(e);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});