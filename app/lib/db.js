// import mongoose from "mongoose";
// const connection = {};



// export const connectToDB = async () => {
//   try {
//     if (connection.isConnected) return;
//     const db = await mongoose.connect(process.env.MONGO);
//     connection.isConnected = db.connection[0].readyState;
    
//   } catch (error) {
//     console.error(error);
//     throw new Error(error);
//   }
// };



import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  try {
    if (isConnected) return;
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};