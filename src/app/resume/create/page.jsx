"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResumeCreatePage() {
  const [user, changeUser] = useState("null");
  const router = useRouter();
  useEffect(() => {
    axios.get("http://localhost:3000/api/user").then((response) => {
      changeUser(response.data);
      console.log(response.data);
    });
  }, []);
  const session = useSession();
  if (session.status == "authenticated" && user.name) {
    return <div>Hello</div>;
  } else {
    router.push("/form");
  }
}
