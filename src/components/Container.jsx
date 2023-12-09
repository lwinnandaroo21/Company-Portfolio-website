import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`${className} max-w-7xl px-6 mx-auto`}>{children}</div>
  )
}

export default Container