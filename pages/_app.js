import AppLayout from '../components/Layout/AppLayout'
import { wrapper } from '../store'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default wrapper.withRedux(MyApp)
