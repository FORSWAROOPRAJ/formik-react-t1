import React from "react";
import {Link} from 'react-router-dom'
function Sidebar() {
  return (
    <div className="sidebar-div">
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>
        <hr className="sidebar-divider my-0" />
        {/*Dashboard  */}
        <li className="nav-item active">
          <Link to='/dashboard'>
                <a className="nav-link" href="index.html">
                  <i className="fas fa-fw fa-tachometer-alt"></i>
                  <span>Dashboard</span>
                </a>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Student data</div>
        {/* Add Student */}
        <li className="nav-item">
          <Link to='/add-students'>
              <a className = 'nav-link' href="#">
                  <span>Add Students</span>
              </a>
          </Link>
        </li>
        {/* All student */}
        <li className="nav-item">
          <Link to='/all-students'>
              <a  className="nav-link" href="#">
                <span>All Students</span>
              </a>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Formik Task</div>
        {/* Add Student */}
        <li className="nav-item">
          <Link to='/add-movie'>
              <a className = 'nav-link' href="#">
                  <span>Add Movie</span>
              </a>
          </Link>
        </li>
        {/* All student */}
        <li className="nav-item">
          <Link to='/movies'>
              <a  className="nav-link" href="#">
                <span>All Movies</span>
              </a>
          </Link>
        </li>
        <hr className="sidebar-divider" />
      </ul>
    </div>
  );
}
export default Sidebar;