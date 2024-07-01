"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    return (
      <div className="flex min-h-screen">
        <div
          className="w-1/2 flex flex-col bg-grey items-center justify-center p-24 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/4.png')" }}
        >
          <img
            src="/assets/images/2.png"
            alt="The Resume Project"
            className="mb-8 h-16"
          />
          <h2 className="text-2xl mb-4">Log in</h2>
          <p className="mb-8">Hello There! {session.user.name}</p>
          <div className="flex items-center mb-4">
            <img
              className="inline-block h-8 w-8 rounded-full ring-1 ring-white"
              src={session.user.image}
              alt="User Profile"
            />
            <p className="ml-2">{session.user.name}</p>
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
        </div>
        <div
          className="w-1/2 bg-custom-darkblue p-8 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/7.jpeg')" }}
        >
          {/* <img
            src="/assets/images/3.png"
            alt="The Resume Project"
            className="bg-cover bg-center mb-8 h-16"
          /> */}
          {/* Additional content here */}
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <div
        className="w-1/2 flex flex-col items-center justify-center p-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/4.png')" }}
      >
        <img
          src="/assets/images/2.png"
          alt="The Resume Project"
          className="mb-8 h-16"
        />
        <h2 className="text-2xl mb-4">Log in</h2>
        <p className="mb-8">Welcome back! Please enter your details.</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => {
            signIn();
          }}
        >
          Login
        </button>
      </div>
      <div
        className="w-1/2 bg-blue-50 p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/7.jpeg')" }}
      >
        {/* Additional content here */}
      </div>
    </div>
  );
}
