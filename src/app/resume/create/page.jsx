"use client";
import { User } from "@/components/db/db";
import { useState } from "react";

export default function ResumeCreatePage() {
  const [user, changeUser] = useState(null);
  const newUser = new User({
    userId: 1,
    userName: "mesh05",
    name: "test",
    email: "test",
    github: "test",
    linkedin: "test",
    education: {
      institute: "test",
      degree: "test",
      year: 2023,
      GPA: 4.0,
    },
    experience: {
      company: "test",
      role: "test",
      year: 2023,
    },
    skills: ["test"],
    projects: [{ name: "test", description: "test" }],
  });
  newUser.save();
  User.findOne({ userId: 1 }).then((user) => {
    changeUser(user);
  });
  return <div>{user}</div>;
}
