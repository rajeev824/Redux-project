import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div className="bg-light py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <span className="navbar-brand mb-0 h1">Redux Tutorial</span>
        <div className="d-flex align-items-center gap-3">
          <Link className="nav-link" to="/" style={{ fontWeight: "bolder" }}>Home</Link>
          <Link className="nav-link" to="/cart" style={{ fontWeight: "bolder" }}>Cart</Link>
          <span className="font-weight-bold">Items: {items.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
