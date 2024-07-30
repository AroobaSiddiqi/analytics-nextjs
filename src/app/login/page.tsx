"use client";

import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authFirebase } from "@/Auth/Firebase";
import { useRouter } from "next/navigation";
import { event } from "@/GoogleAnalytics/GoogleAnalytics";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();

  const handleSignup = () => {
    router.push("/signup");
  };

  const trackLogin = () => {
    event({
      action: "login",
      category: "User Authentication",
      label: "Successful Login",
    });
  };

  const onSubmit = async (data: FormData) => {
    try {
      await signInWithEmailAndPassword(
        authFirebase,
        data.email,
        data.password
      ).then(() => {
        trackLogin();
        router.push("/blogs");
      });
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-400">
            Welcome Back
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-400"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  {...register("email")}
                  className="block w-full rounded-md border-0 py-1.5 px-3 bg-[#111827] text-gray-100 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-400"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-400"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  {...register("password")}
                  className="block w-full rounded-md border-0 py-1.5 px-3 bg-[#111827] text-gray-100 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <button
              onClick={handleSignup}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-400"
            >
              Signup
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
