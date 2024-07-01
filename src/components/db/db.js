import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;

// const userSchema = new mongoose.Schema({
//   userId: Number,
//   userName: String,
//   name: String,
//   email: String,
//   github: String,
//   linkedin: String,
//   education: new mongoose.Schema({
//     institute: String,
//     degree: String,
//     year: Number,
//     GPA: Number,
//   }),
//   experience: [
//     new mongoose.Schema({
//       company: String,
//       role: String,
//       year: Number,
//     }),
//   ],
//   skills: [String],
//   projects: [new mongoose.Schema({ name: String, description: String })],
// });
