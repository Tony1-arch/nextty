import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <div>
        <nav>
          <Link href="/">HOME
          </Link>
          <Link href="/About">About
          </Link>
        </nav>
    </div>
  )
}

export default Navbar