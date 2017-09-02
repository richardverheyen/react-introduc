import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CustomiseUser extends Component {
  render() {
    return (
    <section id="customise-user">
      <Link to={`/`} className="return"><img src="/img/arrow-down-big.svg" alt=""/></Link>
        <form>
          <h1>Form</h1>
        </form>
      </section>
    )
  }
}

export default CustomiseUser
