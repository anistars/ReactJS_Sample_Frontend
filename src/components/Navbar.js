import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "lightpink" }}>
        <div className="container-fluid" style={{ backgroundColor: "lightpink" }}>
          <Link className="navbar-brand" to="/" style={{ color: '#d36677' }}>Products</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#d36677' }}>
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="nav-link" to="/bronzer" style={{ color: '#d36677' }}>Bronzer</Link></li>
                  <li><Link className="nav-link" to="/eyeliner" style={{ color: '#d36677' }}>Eyeliner</Link></li>
                  <li><Link className="nav-link" to="/eyebrow" style={{ color: '#d36677' }}>Eyebrow</Link></li>
                  <li><Link className="nav-link" to="/eyeshadow" style={{ color: '#d36677' }}>Eyeshadow</Link></li>
                  <li><Link className="nav-link" to="/foundation" style={{ color: '#d36677' }}>Foundation</Link></li>
                  <li><Link className="nav-link" to="/lip_liner" style={{ color: '#d36677' }}>Lip liner</Link></li>
                  <li><Link className="nav-link active" to="/blush" style={{ color: '#d36677' }}>Blush</Link></li>
                  <li><Link className="nav-link active" to="/lipstick" style={{ color: '#d36677' }}>LipStick</Link></li>
                  <li><Link className="nav-link active" to="/mascara" style={{ color: '#d36677' }}>Mascara</Link></li>
                  <li><Link className="nav-link active" to="/nail_polish" style={{ color: '#d36677' }}>Nail polish</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )

}

export default NavBar