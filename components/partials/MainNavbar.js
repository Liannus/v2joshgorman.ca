import React from 'react';
import { Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

  export default class MainNavbar extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <Navbar expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Resume</NavLink>
                </NavItem>
              </Nav>
          </Navbar>
          <style jsx global>{`
            .navbar {
  background-color: #b52c2c;
}
.navbar .navbar-brand {
  color: #ecf0f1;
}
.navbar .navbar-brand:hover,
.navbar .navbar-brand:focus {
  color: #ffbbbc;
}
.navbar .navbar-text {
  color: #ecf0f1;
}
.navbar .navbar-text a {
  color: #ffbbbc;
}
.navbar .navbar-text a:hover,
.navbar .navbar-text a:focus {
  color: #ffbbbc;
}
.navbar .navbar-nav .nav-link {
  color: #ecf0f1;
  border-radius: .25rem;
  margin: 0 0.25em;
}
.navbar .navbar-nav .nav-link:not(.disabled):hover,
.navbar .navbar-nav .nav-link:not(.disabled):focus {
  color: #ffbbbc;
}
.navbar .navbar-nav .dropdown-menu {
  background-color: #b52c2c;
  border-color: #ffffff;
}
.navbar .navbar-nav .dropdown-menu .dropdown-item {
  color: #ecf0f1;
}
.navbar .navbar-nav .dropdown-menu .dropdown-item:hover,
.navbar .navbar-nav .dropdown-menu .dropdown-item:focus,
.navbar .navbar-nav .dropdown-menu .dropdown-item.active {
  color: #ffbbbc;
  background-color: #ffffff;
}
.navbar .navbar-nav .dropdown-menu .dropdown-divider {
  border-top-color: #ffffff;
}
.navbar .navbar-nav .nav-item.active .nav-link,
.navbar .navbar-nav .nav-item.active .nav-link:hover,
.navbar .navbar-nav .nav-item.active .nav-link:focus,
.navbar .navbar-nav .nav-item.show .nav-link,
.navbar .navbar-nav .nav-item.show .nav-link:hover,
.navbar .navbar-nav .nav-item.show .nav-link:focus {
  color: #ffbbbc;
  background-color: #ffffff;
}
.navbar .navbar-toggle {
  border-color: #ffffff;
}
.navbar .navbar-toggle:hover,
.navbar .navbar-toggle:focus {
  background-color: #ffffff;
}
.navbar .navbar-toggle .navbar-toggler-icon {
  color: #ecf0f1;
}
.navbar .navbar-collapse,
.navbar .navbar-form {
  border-color: #ecf0f1;
}
.navbar .navbar-link {
  color: #ecf0f1;
}
.navbar .navbar-link:hover {
  color: #ffbbbc;
}

@media (max-width: 575px) {
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ecf0f1;
  }
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #ffbbbc;
  }
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #ffbbbc;
    background-color: #ffffff;
  }
}

@media (max-width: 767px) {
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ecf0f1;
  }
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #ffbbbc;
  }
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #ffbbbc;
    background-color: #ffffff;
  }
}

@media (max-width: 991px) {
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ecf0f1;
  }
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #ffbbbc;
  }
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #ffbbbc;
    background-color: #ffffff;
  }
}

@media (max-width: 1199px) {
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ecf0f1;
  }
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #ffbbbc;
  }
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #ffbbbc;
    background-color: #ffffff;
  }
}

.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item {
  color: #ecf0f1;
}
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:hover,
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:focus {
  color: #ffbbbc;
}
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item.active {
  color: #ffbbbc;
  background-color: #ffffff;
}
          `}</style>
        </div>
      );
    }
  }
