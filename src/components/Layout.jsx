const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default Layout
