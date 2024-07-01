"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const session = useSession();
  const router = useRouter();
  if (session.status === "authenticated") {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            class="inline-block h-8 w-8 rounded-full ring-1 ring-white"
            src={session.data.user.image}
          ></img>
          <div></div>
          <p>{session.data.user.name}</p>
        </div>

        <button
          onClick={() => {
            router.push("/resume/create");
          }}
        >
          Create Resume
        </button>
        <button
          onClick={async () => {
            await signOut();
          }}
        >
          Sign Out
        </button>
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={() => {
          signIn();
        }}
      >
        Login
      </button>
    </main>
  );
}
