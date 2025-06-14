import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-success navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Hora de Aventura</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/personajes">Personajes</a>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                type="button"
                id="lugaresDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Lugares
              </button>
              <ul className="dropdown-menu bg-success">
                <li>
                  <a className="dropdown-item text-white" href="/lugar/bosque-hongos">
                    Bosque de los Hongos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-white" href="/lugar/ooo">
                    Tierra de Ooo
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar en Ooo"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
