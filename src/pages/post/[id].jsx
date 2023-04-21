import PostItem from '@/components/modules/posts/PostItem'
import { capitalize } from '@/utils/string/capitalize'

const PostPage = ({ post }) => {
  return <PostItem title={post.title} content={post.body}></PostItem>
}

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  const paths = posts.map(post => ({
    params: { id: post.id.toString() }
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  )
  const post = await res.json()

  return {
    props: {
      post: {
        ...post,
        title: capitalize(post.title),
        body: capitalize(post.body)
      }
    }
  }
}

export default PostPage
