import clsx from 'clsx'
import Link from 'next/link'

import styles from './Header.module.scss'

const LayoutDefaultHeader = () => {
  return (
    <header className={clsx(styles.header, 'tw-mb-30 tw-py-10')}>
      <div className="container">
        <nav className="tw-text-medium-20 tw-flex tw-justify-center tw-gap-x-15">
          <Link href="/">Posts</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  )
}

export default LayoutDefaultHeader
