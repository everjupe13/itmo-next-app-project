import styles from './AppLink.module.scss'

const AppButton = ({ children, href, rel }) => {
  return (
    <a
      href={href}
      className={styles.link}
      rel={rel || 'noopener noreferrer nofollow'}
    >
      {children}
    </a>
  )
}

export default AppButton
