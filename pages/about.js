// import Fetch from 'isomorphic-unfetch'

const About = (props) => (
  <section>
    <h1>About Me!</h1>
    <p>Want to know my favourite colours?</p>
    <ul>
      {props.colours.map(colour => {return <li>{colour}</li>})}
    </ul>
  </section>
)

About.getInitialProps = async function({req, query}){
  return {
    colours: query.data
  }
}

export default About