"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <div
      className="flex min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/s2.png')",
        width: "100%",
        height: "100%",
        backgroundSize: "auto 900px", // Adjust the height as needed
      }}
    >
      <div className="w-1/2 flex flex-col items-start justify-center p-24 bg-opacity-50">
        {/* <img
          src="/assets/images/2.png"
          alt="The Resume Project"
          className="mb-8 h-16"
        /> */}
        <h2 className="text-2xl mb-4 text-white">theResumeProject LogIn</h2>
        {status === "authenticated" ? (
          <>
            <p className="mb-8 text-white">Hello There! {session.user.name}</p>
            <div className="flex items-center mb-4">
              <img
                className="inline-block h-8 w-8 rounded-full ring-1 ring-white"
                src={session.user.image}
                alt="User Profile"
              />
              <p className="ml-2 text-white">{session.user.name}</p>
            </div>
            <button
              className="mb-4 px-4 py-2 bg-custom-darkblue text-white rounded"
              onClick={() => {
                router.push("/resume/create");
              }}
            >
              Create Resume
            </button>
            <button
              className="px-10 py-2 bg-custom-springgreen text-white rounded"
              onClick={async () => {
                await signOut();
              }}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <p className="mb-8 text-white">Hello there! Please Log In</p>
            <button
              className="mb-4 px-20 py-2 bg-custom-springgreen text-white rounded"
              onClick={() => {
                signIn();
              }}
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}
