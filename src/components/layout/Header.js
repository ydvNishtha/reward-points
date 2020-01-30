import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Header for all pages
 */
function Header() {
  return (
    <header style={headerStyle}>
      <h1>Customer Rewards points</h1>
      <Link style={linkStyle} to="/"> Reward Summary </Link> |
      <Link style={linkStyle} to="/info"> Transaction Details </Link> |
      <Link style={linkStyle} to="/addRecord"> Add Transaction </Link> |
      <Link style={linkStyle} to="/about"> About </Link>
    </header>
  )
}
/**
 *  headerStyle
 */
const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}
/**
 *  Link style
 */
const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;