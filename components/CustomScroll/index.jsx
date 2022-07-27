import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

export default function CustomScrollBar({ children, maxHeight = '100vh' }) {
  return <SimpleBar style={{ maxHeight: maxHeight }}>{children}</SimpleBar>
}
