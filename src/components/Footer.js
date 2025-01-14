import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    <strong>
         <p className="copyright">COPYRIGHT &copy; 2019, Seham Eldeen</p>
     </strong>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
