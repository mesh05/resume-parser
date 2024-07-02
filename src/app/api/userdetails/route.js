import connection from "@/components/db/db";
import { NextResponse } from "next/server";

async function handler(req, res) {
  const data = await req.json();
  try {
    await connection.query(
      "INSERT into users VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        Math.floor(Math.random() * 1000000000),
        data.username,
        data.formData.name,
        data.formData.email,
        data.formData.github,
        data.formData.linkedin,
        data.education.institute +
          "," +
          data.education.instituteYear +
          "," +
          data.education.school +
          "," +
          data.education.schoolYear,
        data.experience.role +
          "," +
          data.experience.company +
          "," +
          data.experience.companyYear,
        data.formData.skills,
        data.formData.achievements,
        data.formData.phone,
        data.projects.project1,
        data.projects.project2,
        data.projects.project3,
        data.formData.place,
      ]
    );

    return NextResponse.json({ message: "User details added" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export { handler as POST };
