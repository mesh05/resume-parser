"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResumeCreatePage() {
  const [user, changeUser] = useState("null");
  const [link, changeLink] = useState("");
  const router = useRouter();

  const { data: session, status } = useSession();
  useEffect(() => {
    axios.get("http://localhost:3000/api/user").then((response) => {
      changeUser(response.data);
    });
  }, []);
  return (
    <div>
      <input
        onChange={(e) => {
          changeLink(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          axios
            .post("http://localhost:8000/details", {
              link: link,
              user: user,
            })
            .then((response) => {
              axios
                .get("http://localhost:8000/update", {
                  responseType: "blob",
                })
                .then((response1) => {
                  const url = window.URL.createObjectURL(
                    new Blob([response1.data])
                  );
                  const link = document.createElement("a");
                  link.href = url;
                  link.setAttribute("download", "resume.docx"); //or any other extension
                  document.body.appendChild(link);
                  link.click();
                });
            });
        }}
      >
        submit
      </button>
    </div>
  );
}
