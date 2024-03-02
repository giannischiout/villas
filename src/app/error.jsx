'use client' // Error components must be Client Components
import { useEffect, useState } from 'react'
import { createLocale } from './actions'

export default function Error({
  error,
  reset,
}) {

  const [loading, setLoading]= useState(false)

  const handleError = () => {
    reset()
    createLocale('locale=en')
  }
  return (
    <div className='error_container'>
      <div className='error_card'>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        className='try_again'
        onClick={
         handleError
        }
      >
        {loading ? "please wait" : "Try again"}
      </button>
      </div>
    </div>
  )
}