"use client";
import axios from "axios";
import FileSaver from "file-saver";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResumeCreatePage() {
  const [user, changeUser] = useState(null);
  const [link, changeLink] = useState("");
  const router = useRouter();

  const { data: session, status } = useSession();
  useEffect(() => {
    axios.get("http://localhost:3000/api/user").then((response) => {
      changeUser(response.data);
      console.log(response.data);
      if (response.data.length == 0) router.push("/form");
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <input
        style={{ color: "black" }}
        type="text"
        placeholder="Enter link"
        onChange={(e) => changeLink(e.target.value)}
        className="px-4 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={() => {
          console.log(user[0]);
          axios({
            method: "post",
            url: "http://localhost:8000/details",
            data: {
              link: link,
              user: user[0],
            },
            responseType: "arraybuffer",
          }).then((response) => {
            const url = window.URL.createObjectURL(
              new Blob([response.data], {
                type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
              })
            );
            const downloadLink = document.createElement("a");
            downloadLink.href = url;
            downloadLink.setAttribute("download", "resume.docx"); //or any other extension
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
          });
        }}
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </div>
  );
}
