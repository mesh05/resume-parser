"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { cookies, headers } from "next/headers";

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
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <input
        type="text"
        placeholder="Enter link"
        onChange={(e) => changeLink(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={() => {
          axios
            .post("http://localhost:8000/details", {
              headers:{
                "X-CSRFToken":cookies().get('next-auth.csrf-token')?.value.split('|')[0]
              },
              link: link,
              user: user,
            })
            .then((response) => {
              axios
                .get("http://localhost:8000/update", {
                  responseType: "blob",
                  headers:{
                    "X-CSRFToken":cookies().get('next-auth.csrf-token')?.value.split('|')[0]
                  },
                })
                .then((response1) => {
                  const url = window.URL.createObjectURL(
                    new Blob([response1.data])
                  );
                  const link = document.createElement("a");
                  link.href = url;
                  link.setAttribute("download", "resume.docx");
                  document.body.appendChild(link);
                  link.click();
                });
            });
        }}
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </div>
  );
}