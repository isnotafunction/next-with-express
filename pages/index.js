import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'

import '../scss/style.scss'

const Index = (props) => (
  <section>
      <Navbar/>
      <h1>Hello World from Next JS</h1>
      <div>
      <Link as={`/fruit/${props.slug}`}href={`/fruit?name=${props.name}`}>
        <a title="my fave fruit">my fave fruit!</a>
      </Link>
      </div>     
  </section>
)

Index.getInitialProps = async function(props){
  let name = "passion fruit"
  let slug = "passion-fruit"
  return{
    name,
    slug
  }
}

export default Index