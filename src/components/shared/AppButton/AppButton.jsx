import styles from './AppButton.module.scss'

const AppButton = ({ children }) => {
  return <button className={styles.button}>{children}</button>
}

export default AppButton
