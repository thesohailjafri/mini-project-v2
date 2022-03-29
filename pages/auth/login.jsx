import React from 'react'
import Link from 'next/link'
export default function Login() {
  return (
    <div className=" grid place-content-center">
      <form className="grid gap-4 w-80 sm:w-96 p-8 bg-sepia-200 rounded-md shadow-md mt-28">
        <h3 className=" text-3xl mb-3">Login</h3>
        <div className="flex flex-col gap-1 text-xl">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className=" rounded-sm form-none border-2 border-sepia-400 focus:border-2 focus:border-sepia-600 transition-all duration-200 ease-out "
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-1 text-xl">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className=" rounded-sm form-none border-2 border-sepia-400 focus:border-2 focus:border-sepia-600 transition-all duration-200 ease-out "
          />
        </div>
        <div>
          <button
            type="submit"
            className=" text-sepia-50 bg-sepia-800 transition-all duration-150 ease-out hover:bg-sepia-900 w-full py-2 rounded-sm mt-4"
          >
            Login
          </button>
        </div>
        <div className="grid gap-1">
          <Link href="/auth/register">
            <a className=" ">Forget password?</a>
          </Link>
          <div>
            Don't have a account?
            <Link href="/auth/register">
              <a className=" text-red-800"> Register</a>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
