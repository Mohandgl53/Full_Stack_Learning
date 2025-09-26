import React, { useMemo } from 'react'

const Footer = ({length}) => {
    const year = useMemo(() => new Date(), []);

  return (
    <footer>
      <p>{length} list items </p>
      Copyright &copy; {year.getFullYear()}
      </footer>
  )
}

export default Footer
