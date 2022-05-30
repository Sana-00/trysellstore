import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import {
  faAngleLeft,
  faAngleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "../components/Home.css";
import * as ReactDom from "react-dom";
import MyCarousal from "./MyCarousal";
import CarouselData from "./CarouselData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

function Home() {
  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 1000) {
      setNum(num + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const videoEl = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };
  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div>
      <img
        src="https://images.pexels.com/photos/7973302/pexels-photo-7973302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width="100%"
      />
      <video
        style={{ width: "100%" }}
        className="mt-1"
        playsInline
        loop
        muted
        alt="All the devices"
        src="https://cdn.shopify.com/s/files/1/0268/9715/4090/files/website_3.mp4?v=1649931025"
        ref={videoEl}
      />
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* // carousel start */}
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div
            id="carouselExampleIndicators"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                // data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className=""
              ></li>
              <li
                // data-target="#carouselExampleIndicators"
                data-slide-to="1"
                className="active"
              ></li>
              <li
                // data-target="#carouselExampleIndicators"
                data-slide-to="2"
                className=""
              ></li>
            </ol>
            <Carousel width="600px" dynamicHeight={false}>
              {CarouselData.map((val) => {
                return (
                  <>
                    {/* <div className="col-lg-4 gy-2"> */}
                    <MyCarousal
                      imgsrc={val.imgsrc}
                      imgsrc1={val.imgsrc1}
                      imgsrc2={val.imgsrc2}
                    />
                    {/* </div> */}
                  </>
                );
              })}
            </Carousel>

            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <p className="pre">
                <FontAwesomeIcon size="lg" icon={faAngleLeft} fixedWidth />
                Previous
              </p>

              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <p className="next">
                Next
                <FontAwesomeIcon size="lg" icon={faAngleRight} fixedWidth />
              </p>

              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>

              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <img
          className="img-white"
          src="https://images.pexels.com/photos/5379069/pexels-photo-5379069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Norway"
          width="100%"
        />
        <div className="text-block">
          <h4 className="blog">Cougar Blogs</h4>
          <p className="blog-text">
            Have a look at trendy fashion blogs to stay update with what's new
            in fashion world.
          </p>
          <button className="blog-btn">Veiw All</button>
        </div>
        <div className="container-fluid" width="100%">
          <div className="row d-flex justify-content-between bg-light">
            <div className="col-lg-5 offset-1 col-sm-12 mt-5">
              <h3 className="s-u-s">Sign up and save</h3>
              <p className="sub">
                Subscribe to get special offers, free giveaways, and
                once-in-a-lifetime deals.
              </p>
            </div>
            <div className="col-lg-6  col-sm-12 mt-5 mb-2 d-flex justify-content-center">
              <input
                className="email"
                type="email"
                id="emails"
                name="emails"
                multiple
                placeholder="Enter your email"
              />
              <button
                type="submit"
                name="btnSave"
                id="btnSave"
                className="btn subcribe"
              >
                <FontAwesomeIcon className="iconsarrow" icon={faArrowRight} />

                <span className="btn-text">Subscribe</span>
              </button>
            </div>
            <div className="col-12 mt-5">
              <img
                width="100%"
                src="https://cdn.shopify.com/s/files/1/0268/9715/4090/files/Cougar_Store_Locations_d8213814-b733-4090-be9e-92497c9c4fcb.jpg?v=1652250628"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
