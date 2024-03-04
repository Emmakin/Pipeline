import React from 'react'
import MainButton from '../../components/MainButton'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  return (
    <div>
      There has been an error
      <MainButton onClick={() => {navigate('/signup')}}>Try again</MainButton>
    </div>
  
  )
}

export default Error
