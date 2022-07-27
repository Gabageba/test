import React from 'react'

interface ErrorProps {
  error: string
}

const Error = ({error}: ErrorProps) => {
  return (
    <p style={{color: 'red'}}>{error}</p>
  )
}

export default Error