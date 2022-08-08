import React from 'react'

interface ErrorMessage {
    error: string
}

function ErrorMessage({error}: ErrorMessage) {
  return (
    <p className='text-center text-red-600'>{error}</p>
  )
}

export default ErrorMessage