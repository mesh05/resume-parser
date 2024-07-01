"use client";
import axios from "axios";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResumeCreatePage() {
  function get_cookie(n) {
    if (!document.cookie || document.cookie !== "") return null;

    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();

      if (cookie.substring(0, name.length + 1) === name + "=")
        return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
  let csrfToken = get_cookie("csrftoken");

  const [user, changeUser] = useState("null");
  const [link, changeLink] = useState("");
  const router = useRouter();
  useEffect(() => {
    axios.get("http://localhost:3000/api/user").then((response) => {
      changeUser(response.data);
    });
  }, []);
  const session = useSession();
  if (user[0].name) {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="link"
            onChange={(e) => {
              changeLink(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              axios.post("http://localhost:8000/details", {
                link: link,
              });
            }}
          >
            Submit
          </button>
        </div>
        {JSON.stringify(user)}
      </div>
    );
  } else if (user[1] === null) {
    router.push("/form");
  }
}
