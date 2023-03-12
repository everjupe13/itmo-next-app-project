import Link from "next/link"

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <Link href="/">
          Home
        </Link>{' '}
        |{' '}
        <Link href="/about">
          About
        </Link>
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default Layout
