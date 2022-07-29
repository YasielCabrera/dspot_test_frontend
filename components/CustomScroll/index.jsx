import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

export default function CustomScrollBar({ children }) {
  return <SimpleBar style={{ height: '100vh' }}>{children}</SimpleBar>
}
