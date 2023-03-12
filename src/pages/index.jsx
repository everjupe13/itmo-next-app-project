import Link from 'next/link'

function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js SPA!</h1>
      <p>
        Click <Link href="/about">here</Link> to learn more about me.
      </p>
    </div>
  )
}

export default Home
