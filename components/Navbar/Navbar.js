import React from 'react'
import Link from 'next/link'

import './Navbar.scss'

class Navbar extends React.Component{
  constructor(props){
    super()
    this.props = props
  }

  render(){
    return(
      <nav>
        <div>
            <Link href="/">
            <a title="Our Api">Home</a>
            </Link>
            <Link href="/about">
            <a title="About Next JS">About</a>
            </Link>
        </div>
      </nav>
    )
  }
}

export default Navbar