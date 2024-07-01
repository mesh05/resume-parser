"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ResumeCreatePage() {
  const [user, changeUser] = useState("null");
  useEffect(() => {
    axios.get("http://localhost:3000/api/user").then((response) => {
      changeUser(response.data);
      console.log(response.data);
    });
  }, []);
  return <div>{user}</div>;
}
