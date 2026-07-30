import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <h1 className="logo">Magazines</h1>

        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="#">Blog</Link>
          <Link to="/category">Category</Link>
          <Link to="#">Product</Link>
          <Link to="#">Login</Link>
          <Link to="#">Customer</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;