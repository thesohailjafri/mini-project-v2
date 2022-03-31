import React, { useState } from 'react'
import Link from 'next/link'
import { loginApi, registerApi } from '../../api'
import { toast } from 'react-toastify'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { userInfoState } from '../../atoms/authAtom'
import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
export default function Register() {
  const router = useRouter()

  const setUserInfo = useSetRecoilState(userInfoState)
  const login = async (values, actions) => {
    const { email, password } = values
    const res = await loginApi(email, password)
    if (res) {
      if (res.status >= 400) {
        toast.error(res.data.msg || 'Something went wrong')
      } else if (res.status >= 200) {
        toast.success('Login Successful')
        setUserInfo((ps) => ({ ...ps, email: email }))
        localStorage.setItem('refreshToken', res.data.refreshToken)
        actions.resetForm()
        router.push('/dashboard')
      }
    }
  }

  const Schema = yup.object().shape({
    email: yup.string().email().required('Please Enter your Email'),
    password: yup
      .string()
      .required('Please Enter your password')
      .min(8, 'Password should be at least 8 characters long')
      .max(15, 'Password should be at most 16 characters long')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  })

  return (
    <div className=" grid place-content-center">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Schema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            login(values, actions)
            actions.setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form className="grid gap-4 w-80 sm:w-96 p-8 bg-sepia-200 rounded-md shadow-md mt-28">
            <h3 className=" text-3xl mb-3">Login</h3>
            <div className="grid">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className=" rounded-sm form-none border-2 border-sepia-400 focus:border-2 focus:border-sepia-600 transition-all duration-200 ease-out "
                placeholder="Enter email"
              />
            </div>
            <div className="grid">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                className=" rounded-sm form-none border-2 border-sepia-400 focus:border-2 focus:border-sepia-600 transition-all duration-200 ease-out "
                placeholder="Enter password"
              />
            </div>

            <ul className="list-disc ml-2">
              <ErrorMessage
                name="email"
                component="li"
                className=" lowercase first-letter:uppercase"
              />
              <ErrorMessage
                name="password"
                component="li"
                className=" lowercase first-letter:uppercase"
              />
            </ul>
            <button
              type="submit"
              className=" text-sepia-50 bg-sepia-800 transition-all duration-150 ease-out hover:bg-sepia-900 w-full py-2 rounded-sm"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <AiOutlineLoading3Quarters className=" animate-spin btn-sm" />
                  Submiting...
                </span>
              ) : (
                <span>Login</span>
              )}
            </button>
            <div className="grid gap-1">
              <Link href="/auth/register">
                <a className=" ">Forget password?</a>
              </Link>
              <div>
                Dont have a account?
                <Link href="/auth/register">
                  <a className=" text-red-800"> Register</a>
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
