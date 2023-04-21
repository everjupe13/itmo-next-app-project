import Head from 'next/head'

const About = ({ time }) => {
  return (
    <>
      <Head>
        <title>ITMO App | About</title>
      </Head>
      <h1 className="tw-mb-30 tw-text-center tw-text-bold-30">
        About This App
      </h1>
      <p className="tw-mb-10 tw-text-center tw-text-medium-15">
        This app was built using Next.js.
      </p>
      <p className=" tw-text-center tw-text-medium-15">
        The server time is {time}.
      </p>
    </>
  )
}

export const getServerSideProps = async () => {
  return {
    props: { time: new Date().toString() }
  }
}

export default About
