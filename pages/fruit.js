const Fruit = (props) =>(
  <section>
    <h1>my fave fruit!</h1>
    <p>My favourite fruit is {props.url.query.name}</p>
  </section>
)

export default Fruit