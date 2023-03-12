import Layout from '../components/Layout'


const About = ({ time }) => {
  return (
    <Layout>
      <h1>About This App</h1>
      <p>This app was built using Next.js.</p>
      <p>The server time is {time}.</p>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  return { 
    props: { time: new Date().toString() } 
  }
}

export default About
