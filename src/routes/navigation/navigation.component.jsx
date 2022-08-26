import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation-container nes-container">
        <Link to="/">
          <div className="navigation-logo">
            SensoryMinds <i className="nes-icon trophy   is-small"></i>
          </div>
        </Link>

        <div className="navigation-container-links">
          <Link to="/">Home</Link>
          <Link to="/rules">Rules</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
