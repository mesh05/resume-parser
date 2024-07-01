import mongoose, { mongo } from "mongoose";

const uri = `mongodb+srv://mesh:${process.env.MONGO_PASSWORD}@delivery-app.5jye8pq.mongodb.net/?appName=delivery-app`;

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await mongoose.connect(uri);
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const userSchema = new mongoose.Schema({
  userId: Number,
  userName: String,
  name: String,
  email: String,
  github: String,
  linkedin: String,
  education: new mongoose.Schema({
    institute: String,
    degree: String,
    year: Number,
    GPA: Number,
  }),
  experience: [
    new mongoose.Schema({
      company: String,
      role: String,
      year: Number,
    }),
  ],
  skills: [String],
  projects: [new mongoose.Schema({ name: String, description: String })],
});

const User = mongoose.model("User", userSchema);

export { User };
