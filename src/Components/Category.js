import React from "react";

import aptmIcon from "../img/icon-apartment.png";
import villaIcon from "../img/icon-villa.png";
import homeIcon from "../img/icon-house.png";
import garageIcon from "../img/icon-luxury.png";
import shopIcon from "../img/icon-condominium.png";
import officeIcon from "../img/icon-housing.png";
import buildingIcon from "../img/icon-building.png";
import townhouseIcon from "../img/icon-neighborhood.png";

const Category = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="mb-3">Property Types</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
            lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum
            vero dolor duo.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <a
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={aptmIcon} alt="Icon" />
                </div>
                <h6>Apartment</h6>
                <span>123 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <a
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={villaIcon} alt="Icon" />
                </div>
                <h6>Villa</h6>
                <span>123 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <a
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={homeIcon} alt="Icon" />
                </div>
                <h6>Home</h6>
                <span>123 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <a
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={officeIcon} alt="Icon" />
                </div>
                <h6>Office</h6>
                <span>123 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <a
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={buildingIcon} alt="Icon" />
                </div>
                <h6>Building</h6>
                <span>123 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <a
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={townhouseIcon} alt="Icon" />
                </div>
                <h6>Townhouse</h6>
                <span>123 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <a
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={shopIcon} alt="Icon" />
                </div>
                <h6>Shop</h6>
                <span>123 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <a
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={garageIcon} alt="Icon" />
                </div>
                <h6>Garage</h6>
                <span>123 Properties</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
