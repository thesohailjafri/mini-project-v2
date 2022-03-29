import React, { useEffect } from 'react'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { GiMailbox } from 'react-icons/gi'
import { FaMailBulk } from 'react-icons/fa'
import { verifyEmailApi } from '../../api'
import { useRouter } from 'next/router'
export default function VerifyEmail() {
  const router = useRouter()
  const { token, email } = router.query
  const verify = async () => {
    const res = await verifyEmailApi(token, email)
  }

  return (
    <div>
      <main className="grid place-content-center gap-8">
        <div>
          <h3 className="text-center text-3xl font-semibold">
            Verify Your Email
          </h3>
          <h6 className="mt-4 text-center text-sepia-700 max-w-md">
            You need to verify your email address before you can use your
            account.
          </h6>
        </div>

        {token && email ? (
          <div>
            <FaMailBulk className="h-60 w-60 text-sepia-800 mx-auto" />
          </div>
        ) : (
          <div>
            <GiMailbox className="h-60 w-60 text-sepia-800 mx-auto" />
          </div>
        )}

        {token && email ? (
          <div className="flex flex-wrap items-center justify-center gap-8 mx-auto">
            <button className=" sepia-btn">Verify Email</button>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-8 mx-auto">
            <button className=" sepia-btn">Resend Email</button>
            <button className="sepia-outline-btn">Contact Support</button>
          </div>
        )}
      </main>
    </div>
  )
}
