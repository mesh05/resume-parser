import connection from "@/components/db/db";
import { NextResponse } from "next/server";

async function handler(req, res) {
  try {
    const [rows] = await connection.query("SELECT * FROM users");
    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export { handler as GET };
