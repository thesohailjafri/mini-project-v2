import 'react-quill/dist/quill.snow.css'
import '../styles/globals.scss'
import '../styles/utils.scss'
import Layout from '../components/Layout'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default MyApp
