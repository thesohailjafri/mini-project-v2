import 'react-quill/dist/quill.snow.css'
import '../styles/globals.scss'
import '../styles/utils.scss'
import Layout from '../components/Layout'
import { RecoilRoot } from 'recoil'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
axios.defaults.baseURL = process.env.API_URL
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.patch['Content-Type'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.delete['Content-Type'] = 'application/json'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default MyApp
