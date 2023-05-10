import React from 'react'

const InfoText = ({children}) => {
  return (
    <>
      <h3 className="bg-red-500 text-white font-bold text-center p-2 border-0 rounded-md mb-4 text-xl">{children}</h3>
    </>
  )
}

export default InfoText