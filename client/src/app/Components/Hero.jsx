import React from "react";
import Image from "next/image";
import { IoChevronForwardOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <>
      <div className="container px-5">
        <div className="section-block">
          <div className="section-content d-flex align-items-center gap-3">
            <h2 className="section-title">Lastest news</h2>
            <div className="io5 shadow">
              <IoChevronForwardOutline />
            </div>
          </div>
          <div className="row py-4 gx-4">
            <div className="col-lg-6">
              <figure className="img-holder">
                <Image
                  src="/image/oli.jpg"
                  alt="Picture of the author"
                  width={640}
                  height={400}
                  className="img-cover"
                />
                <h3 className="img-caption">
                  KP Oli ventures into cinematic realm with{" "}
                  <span>'Na Metinay Ghaau'</span>
                </h3>
              </figure>
            </div>
            <div className="col-lg-6">
              <div className="row gx-5 gy-4">
                <div className="col-lg-3">
                  <Image
                    src="/image/cricket.webp"
                    alt="Picture of the author"
                    width={140}
                    height={110}
                    className="thumb"
                  />
                </div>
                <div className="col-lg-9">
                  <h4 className="section-subtitle">
                    <a href="#">
                      Tribhuvan Army Club sets a target of 280 runs for Karnali
                      as Binod Bhandari breaks record in PM Cup{" "}
                    </a>
                  </h4>
                  <hr />
                </div>
                <div className="col-lg-3">
                  <Image
                    src="/image/chinese.webp"
                    alt="Picture of the author"
                    width={140}
                    height={110}
                    className="thumb"
                  />
                </div>
                <div className="col-lg-9">
                  <h4 className="section-subtitle">
                    <a href="#">
                      Tribhuvan Army Club sets a target of 280 runs for Karnali
                      as Binod Bhandari breaks record in PM Cup{" "}
                    </a>
                  </h4>
                  <hr />
                </div>
                <div className="col-lg-3">
                  <Image
                    src="/image/ktm.webp"
                    alt="Picture of the author"
                    width={140}
                    height={110}
                    className="thumb"
                  />
                </div>
                <div className="col-lg-9">
                  <h4 className="section-subtitle">
                    <a href="#">
                      Tribhuvan Army Club sets a target of 280 runs for Karnali
                      as Binod Bhandari breaks record in PM Cup{" "}
                    </a>
                  </h4>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
