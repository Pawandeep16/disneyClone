import Image from 'next/image'
import Link from 'next/link'
import React from 'react'




function Header() {
  return (
    <header>
      <Link href="/">
        <Image width={120} height={100} className=' cursor-pointer  ' src="https://download.logo.wine/logo/Disney%2B/Disney%2B-Logo.wine.png" alt='Disney logo'/>
      </Link>
    </header>
  )
}

export default Header