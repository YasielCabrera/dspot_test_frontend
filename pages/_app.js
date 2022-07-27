import CustomScrollBar from '../components/CustomScroll'
import AppLayout from '../components/Layout/AppLayout'
import { wrapper } from '../store'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <CustomScrollBar>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </CustomScrollBar>
  )
}

export default wrapper.withRedux(MyApp)
