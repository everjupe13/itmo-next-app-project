import Head from 'next/head'

const Error404Page = () => {
  return (
    <>
      <Head>
        <title>ITMO App | Страница не найдена</title>
      </Head>

      <div className="tw-flex tw-h-[400px] tw-grow tw-items-center tw-justify-center">
        <p className="tw-text-center tw-text-[30px] tw-font-normal">
          Ughm! I&apos;m sorry, but <br />
          <strong>Page not found</strong> - 404
        </p>
      </div>
    </>
  )
}

export default Error404Page
