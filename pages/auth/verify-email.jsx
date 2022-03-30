import React, { useEffect, useState } from 'react'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { GiMailbox } from 'react-icons/gi'
import { FaMailBulk } from 'react-icons/fa'
import { verifyEmailApi } from '../../api'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { userInfoState } from '../../atoms/authAtom'
import { toast } from 'react-toastify'
import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/outline'
export default function VerifyEmail() {
  const userInfo = useRecoilValue(userInfoState)
  const router = useRouter()
  const [verified, setVerified] = useState(false)
  const { token, email } = router.query
  const verify = async () => {
    const res = await verifyEmailApi(token, email)
    if (res) {
      if (res.status >= 400) {
        toast.error(res.data.msg || 'Something went wrong')
      } else if (res.status >= 200) {
        toast.success(res.data.msg || 'Something went wrong')
        setVerified(true)
      }
    }
  }
  if (userInfo.email) {
    return (
      <div>
        <main className="grid place-content-center gap-8">
          <div>
            <h3 className="text-center text-3xl font-semibold">
              Verify Your Email
            </h3>
            <h6 className="mt-4 text-center text-sepia-700 max-w-md">
              You need to verify your email address ({userInfo.email}) before
              you can use your account.
            </h6>
          </div>

          <div>
            <GiMailbox className="h-60 w-60 text-sepia-800 mx-auto" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mx-auto">
            <button className=" sepia-btn">Resend Email</button>
            <button className="sepia-outline-btn">Contact Support</button>
          </div>
        </main>
      </div>
    )
  }
  if (token && email) {
    return (
      <div>
        <main className="grid place-content-center gap-8">
          <div>
            <h3 className="text-center text-3xl font-semibold">
              Verify Your Email
            </h3>
            <h6 className="mt-4 text-center text-sepia-700 max-w-md">
              You need to verify your email address ({email}) before you can use
              your account.
            </h6>
          </div>

          <div>
            <FaMailBulk className="h-60 w-60 text-sepia-800 mx-auto" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mx-auto">
            {verified ? (
              <div className="flex items-center flex-col gap-4 ">
                <h6 className=" text-xl">
                  <CheckIcon className="btn-sm" />
                  Email verified successfully
                </h6>
                <div className=" sepia-btn">
                  <Link href="/auth/login">Go to Login</Link>
                </div>
              </div>
            ) : (
              <button onClick={verify} className=" sepia-btn">
                Verify Email
              </button>
            )}
          </div>
        </main>
      </div>
    )
  } else {
    return (
      <div>
        <main className="grid place-content-center gap-8">
          <div>
            <h3 className="text-center text-3xl font-semibold">
              Verify Your Email
            </h3>
          </div>

          <div>
            <FaMailBulk className="h-60 w-60 text-sepia-800 mx-auto" />
          </div>
        </main>
      </div>
    )
  }
}
