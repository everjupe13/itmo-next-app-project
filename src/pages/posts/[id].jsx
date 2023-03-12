import { useRouter } from 'next/router'

function Post() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>Post {id}</h1>
      <p>This is the content for post {id}.</p>
    </div>
  )
}

export default Post
