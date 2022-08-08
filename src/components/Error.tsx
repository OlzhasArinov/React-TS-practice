import React from 'react'
import { useProducts } from '../hooks/products'

function Error() {
    const {error} = useProducts()

  return (
    <p className='text-center text-red-600'>{error}</p>
  )
}

export default Error