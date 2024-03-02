'use client' 
import { useEffect, useState } from 'react'
import { createLocale } from '../actions'

export default function Error({
  error,
  reset,
}) {

  const [loading, setLoading]= useState(false)

  const handleError = () => {
    createLocale('locale=en')
    reset()
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