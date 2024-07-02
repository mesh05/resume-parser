import { authOptions } from "@/components/auth/authOptions";
import connection from "@/components/db/db";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";

async function handler(req, res) {
  const session = await getServerSession(authOptions);
  try {
    const [rows] = await connection.query(
      "SELECT * FROM users WHERE username = ?",
      [session.user.name]
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export { handler as GET };
