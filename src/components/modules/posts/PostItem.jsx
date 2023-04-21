import styles from './Post.module.scss'

const PostItem = ({ title, content }) => {
  return (
    <>
      <h1 className="tw-mb-10 tw-text-bold-30">{title}</h1>
      <p className="tw-text-medium-15">{content}</p>
    </>
  )
}

export default PostItem
