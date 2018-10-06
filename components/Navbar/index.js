import React from 'react'
import Link from 'next/link'

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
        <style jsx>{`
          a {
            padding: 10px;
            text-decoration:none;
            color: green;
          }
        `}
        </style>
      </nav>
    )
  }
}

export default Navbar