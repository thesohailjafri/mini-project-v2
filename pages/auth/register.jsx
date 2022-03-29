import React, { useRef } from 'react'
import Link from 'next/link'
import { registerApi } from '../../api'
import { toast } from 'react-toastify'

export default function Register() {
  const emailRef = useRef(null)
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const passwordConfirmRef = useRef(null)

  const register = async (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const username = usernameRef.current.value
    const password = passwordRef.current.value
    const res = await registerApi(email, username, password)
    if (res) {
      console.log('hi', res)
      if (res.status >= 400) {
        console.log('errro')
        toast.error(res.data.msg || 'Something went wrong')
      } else if (res.status >= 200) {
        console.log('ok')
        toast.success(res.data.msg || 'Something went wrong')
      }
    }
  }

  return (
    <div className=" grid place-content-center">
      <form className="grid gap-4 w-80 sm:w-96 p-8 bg-sepia-200 rounded-md shadow-md mt-28">
        <h3 className=" text-3xl mb-3">Register</h3>
        <div className="flex flex-col gap-1 text-xl">
          <label htmlFor="username">Username</label>
          <input
            ref={usernameRef}
            type="text"
            id="username"
            className=" rounded-sm form-none border-2 border-sepia-400 focus:border-2 focus:border-sepia-600 transition-all duration-200 ease-out "
            placeholder="Enter username"
          />
        </div>
        <div className="flex flex-col gap-1 text-xl">
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            className=" rounded-sm form-none border-2 border-sepia-400 focus:border-2 focus:border-sepia-600 transition-all duration-200 ease-out "
            placeholder="Enter email"
          />
        </div>

        <div className="flex flex-col gap-1 text-xl">
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            className=" rounded-sm form-none border-2 border-sepia-400 focus:border-2 focus:border-sepia-600 transition-all duration-200 ease-out "
            placeholder="Enter password"
          />
        </div>
        <div className="flex flex-col gap-1 text-xl">
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            ref={passwordConfirmRef}
            type="password"
            id="passwordConfirm"
            className=" rounded-sm form-none border-2 border-sepia-400 focus:border-2 focus:border-sepia-600 transition-all duration-200 ease-out "
            placeholder="Enter password"
          />
        </div>
        <div>
          <button
            onClick={register}
            type="submit"
            className=" text-sepia-50 bg-sepia-800 transition-all duration-150 ease-out hover:bg-sepia-900 w-full py-2 rounded-sm mt-4"
          >
            Register
          </button>
        </div>
        <div className="grid gap-1">
          <div>
            Already have a account?
            <Link href="/auth/login">
              <a className=" text-red-800"> Login</a>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
