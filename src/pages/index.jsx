import Layout from '../components/Layout'
import PostList from '../components/PostList'


const Home = ({ posts }) => {
  return (
    <Layout>
      <h1>Welcome to my Next.js App</h1>
      <p>Here are some posts:</p>
      <PostList posts={posts} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}


export default Home
