import Link from 'next/link'


const Index = () => (
  <section>
    <h1>Hello world from next.js</h1>
    <Link href="/about">
    <a title="about next js">About</a>
    </Link>
  </section>
)

export default Index