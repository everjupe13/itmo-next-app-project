import Footer from '@/components/layouts/Footer/Footer'
import Header from '@/components/layouts/Header/Header'

import styles from './LayoutDefault.module.scss'

const LayoutDefault = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default LayoutDefault
