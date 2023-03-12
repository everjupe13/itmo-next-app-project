import Layout from '../../components/Layout'


const Post = ({ post }) => {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  const paths = posts.map(post => ({
    params: { id: post.id.toString() },
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
      post,
    },
  }
}

export default Post
