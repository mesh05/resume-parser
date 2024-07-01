import mongoose from "mongoose";

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

export default mongoose.models.User || mongoose.model("User", userSchema);
