import React from 'react';
import { Link } from 'react-router-dom'
/**
 * { tag: 'div' }
 * 浏览器：react-dom div
 * 服务端：字符串的 html，
 * 同构：
 */
class Header extends React.Component {
  componentWillMount() {
    console.log('component will');
  }
  buy () {
    console.log(1234566);
  }
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        382938929090
        <button onClick={this.buy}>buy</button>
      </div>
    )
  }
}

export default Header;