import React from 'react'

type FooterProps = {
    name: string
}

const Footer = ({name}: FooterProps) => {
  return (
    <div>{name}</div>
  )
}

export default Footer