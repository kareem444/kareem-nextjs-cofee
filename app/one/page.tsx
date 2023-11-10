import Link from 'next/link'
import React from 'react'

export default function One() {
  return (
    <div>
      <h1>One</h1>
      <Link href='/one/5'>
        Go to :5
      </Link>
    </div>
  )
}
