"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    return (
      <div className="flex min-h-screen">
        <div className="w-1/2 flex flex-col items-center justify-center p-24 bg-gray-100">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Logo_2013_Horizon.png/640px-Logo_2013_Horizon.png"
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
        <div className="w-1/2 bg-blue-50 p-8">
          <h1 className="text-3xl mb-4">Welcome, Adrian</h1>
          <p className="text-lg mb-8">Access & manage your account and transactions efficiently.</p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">2 Bank Accounts</h2>
            <p className="text-2xl mb-4">$2,698.12</p>
            <h3 className="text-lg mb-2">Recent transactions</h3>
            <ul>
              <li className="mb-2">Spotify: -$15.00</li>
              <li className="mb-2">Alexa Doe: +$88.00</li>
              <li className="mb-2">Figma: -$18.99</li>
              <li className="mb-2">Fresh F&V: -$88.00</li>
              <li className="mb-2">Sam Sulke: -$40.20</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 flex flex-col items-center justify-center p-24 bg-gray-100">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Logo_2013_Horizon.png/640px-Logo_2013_Horizon.png"
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
      <div className="w-1/2 bg-blue-50 p-8">
        <h1 className="text-3xl mb-4">Welcome, Adrian</h1>
        <p className="text-lg mb-8">Access & manage your account and transactions efficiently.</p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl mb-4">2 Bank Accounts</h2>
          <p className="text-2xl mb-4">$2,698.12</p>
          <h3 className="text-lg mb-2">Recent transactions</h3>
          <ul>
            <li className="mb-2">Spotify: -$15.00</li>
            <li className="mb-2">Alexa Doe: +$88.00</li>
            <li className="mb-2">Figma: -$18.99</li>
            <li className="mb-2">Fresh F&V: -$88.00</li>
            <li className="mb-2">Sam Sulke: -$40.20</li>
          </ul>
        </div>
      </div>
    </div>
  );
}