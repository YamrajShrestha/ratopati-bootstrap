import React from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
const HomePage = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image
              src="/image/logo-rp.webp"
              alt="Picture of the author"
              width={175}
              height={65}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Politics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Society
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Lifestyle
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  World
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Arts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tech
                </a>
              </li>
            </ul>
            <div className="faSearch mx-2">
              <FaSearch />
            </div>
            <a href="#" className="np p-2 text-decoration-none">
              NP
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomePage;
