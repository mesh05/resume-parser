import connection from "@/components/db/db";
import { NextResponse } from "next/server";

async function handler(req, res) {
  const formData = req.body;
  try {
    const [rows] = await connection.query(
      "INSERT into users (name,email,github,linkedin,education,experience,skills,achievements) VALUES (?,?,?,?,?,?,?,?) WHERE username=?",
      [
        formData.name,
        formData.email,
        formData.github,
        formData.linkedin,
        JSON.stringify(formData.education),
        JSON.stringify(formData.experience),
        formData.skills,
        formData.achievements,
        req.body.username,
      ]
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export { handler as GET };
