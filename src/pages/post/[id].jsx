import { useRouter } from 'next/router'

import PostItem from '@/components/modules/posts/PostItem'
import { capitalize } from '@/utils/string/capitalize'

const PostPage = ({ post }) => {
  const router = useRouter()
  const { id: postId } = router.query

  // router.push('/some-path')
  // router.replace('/some-path')
  // router.push({ pathname: '/come-to-me', query: { id: 1, slug: 'sone-slug' } })
  // router.push({ pathname: '/post', query: { id: 1, slug: 'sone-slug' } })
  // router.replace({ pathname: '/come-to-me', query: { id: 1, slug: 'sone-slug' } })

  console.log(router)

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
