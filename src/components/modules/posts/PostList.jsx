import Link from 'next/link'

const PostList = ({ posts }) => {
  return (
    <ol className="tw-mx-auto tw-w-fit">
      {posts.map(post => (
        <li className="tw-mb-5 tw-list-decimal" key={post.id}>
          <Link href={`/post/${post.id}`} className="tw-py-5 tw-text-medium-15">
            {post.title}
          </Link>
        </li>
      ))}
    </ol>
  )
}

export default PostList
