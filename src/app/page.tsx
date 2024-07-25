"use client";

import { useRouter } from "next/navigation";

export default function Example() {
  const router = useRouter();

  const handleSignup = () => {
    router.push("/signup");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="mx-auto max-w-2xl py-28">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-100/10 hover:ring-gray-100/30">
          Want to read our blogs to get an idea of what we offer ?{" "}
          <a
            href="https://news.stockstelegraph.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-indigo-700 hover:text-indigo-500"
          >
            <span aria-hidden="true" className="absolute inset-0" />
            Learn more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl">
          Data to enrich your Stock Market understanding
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Our top-notch machine learning models work tirelessly behind the
          scenes, crunching numbers and decoding complex patterns to bring you
          clear, actionable insights for smarter investment decisions.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={handleSignup}
            className="flex justify-center rounded-md bg-indigo-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create an Account
          </button>

          <button
            onClick={handleLogin}
            className=" text-sm font-semibold leading-6 text-gray-400 hover:text-gray-200"
          >
            Login{" "}
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
