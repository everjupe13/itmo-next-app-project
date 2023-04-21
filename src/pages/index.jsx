import Head from 'next/head'
import { useEffect } from 'react'

import PostList from '@/components/modules/posts/PostList'
import useCities from '@/hooks/useCities'
import { capitalize } from '@/utils/string/capitalize'

const Home = ({ posts }) => {
  const { data, isLoading } = useCities()

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(data)
  }, [isLoading, data])

  return (
    <>
      <Head>
        <title>ITMO App</title>

        <meta name="keywords" content="ITMO, NEXT, report" />
        <meta name="description" content="Page with Posts links" />
      </Head>
      <h1 className="tw-mb-30 tw-text-center tw-text-bold-30">
        Welcome to my Next.js App
      </h1>
      <PostList posts={posts} />
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  const capitalizedPosts = posts?.map(post => ({
    ...post,
    title: capitalize(post.title),
    body: capitalize(post.body)
  }))

  return {
    props: {
      posts: capitalizedPosts
    }
  }
}

export default Home
