import connectToDatabase from "@/components/db/db";
import User from "@/components/models/user";
import { NextResponse } from "next/server";

async function handler(req, res) {
  try {
    await connectToDatabase();

    // Perform your MongoDB operations here
    const data = await User.db("resume")
      .collection("User")
      .findOne({ hi: "hello" })
      .toArray();

    return new NextResponse({ data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse({
      error: "An error occurred while connecting to MongoDB",
    });
  }
}

export { handler as GET, handler as POST };
