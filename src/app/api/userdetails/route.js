import connection from "@/components/db/db";
import { NextResponse } from "next/server";

async function handler(req, res) {
  const data = req.body;
  console.log(data);
  try {
    await connection.query(
      "INSERT into users (name,email,github,linkedin,education,experience,skills,achievements) VALUES (?,?,?,?,?,?,?,?) WHERE username=?",
      [
        data.formData.name,
        data.formData.email,
        data.formData.github,
        data.formData.linkedin,
        JSON.stringify(data.education),
        JSON.stringify(data.experience),
        data.formData.skills,
        data.formData.achievements,
        req.body.username,
      ]
    );

    return NextResponse.json({ message: "User details added" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export { handler as POST };
