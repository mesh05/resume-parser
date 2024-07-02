import connection from "@/components/db/db";
import { NextResponse } from "next/server";

async function handler(req, res) {
  const data = await req.json();
  try {
    await connection.query("INSERT into users VALUES (?,?,?,?,?,?,?,?,?,?)", [
      Math.floor(Math.random() * 1000000000),
      data.username,
      data.formData.name,
      data.formData.email,
      data.formData.github,
      data.formData.linkedin,
      JSON.stringify(data.education),
      JSON.stringify(data.experience),
      data.formData.skills,
      data.formData.achievements,
    ]);

    return NextResponse.json({ message: "User details added" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export { handler as POST };
