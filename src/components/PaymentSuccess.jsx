import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PaymentSuccess() {

  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {

      navigate("yourorder")
    }, [2000])
  }, [])

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className='text-2xl font-bold'>Your Payment Completed Successfully !..</h1>
    </div>
  )
}
