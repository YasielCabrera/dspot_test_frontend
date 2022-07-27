import PropTypes from 'prop-types'
import Container from '../../library/Container'

function AppLayout({ children }) {
  return <Container>{children}</Container>
}

AppLayout.propTypes = {
  children: PropTypes.node,
}

export default AppLayout
