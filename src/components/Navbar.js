import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <Fragment>
      <nav style={navStyle}>
        <ul style={navUl}>
          <li style={navLi}>
            <Link to='/'>Home</Link>
          </li>
          <li style={navLi}>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

Navbar.propTypes = {

}



const navStyle = {
  backgroundColor: 'teal',
  margin: '0',
  padding: '0',
}

const navUl = {
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '1rem'
}

const navLi = {
  textDecoration: 'none',
}

export default Navbar
