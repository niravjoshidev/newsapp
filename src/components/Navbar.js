import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () =>{
    return (
      <nav className="navbar fixed-top navbar-expand-lg" style={{ backgroundColor: "#e3f2fd" }}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">News Monkey</Link> */}
          <img title='News Monkey' src="./app-logo.png" style={{width: '50px'}} alt="News Monkey" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              {/* <li className="nav-item"><a className="nav-link" href="/">About</a></li> */}
              <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
