import React, { useEffect, useState } from "react";
import {
  faAngleLeft,
  faAngleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "react-responsive-carousel";

function MyCarousal({ imgsrc, imgsrc1, imgsrc2 }) {
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

  return (
    <>
      <div className="carousel-inner">
        <div className="carousel-item">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="d-flex flex-column">
                  <div className="carousel-wrapper">
                    <div className="h-128 order-1 order-md-2">
                      <img src={imgsrc} className="h-full" />
                    </div>
                    <div className="h-128">
                      <img
                        // className="sm-img2"
                        src={imgsrc1}
                        // height={"60rem"}
                        alt=""
                        className="h-full"
                      />
                    </div>
                    <div className="h-128">
                      <img
                        // className="sm-img3"
                        src={imgsrc2}
                        // height={"70rem"}
                        alt=""
                        className="h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 ful-col">
                <h2 className="text-left font-weight-bold">
                  Casual Dressing Red
                </h2>
                <h5 className="text-left">LTS-0000-redshrt</h5>
                <p className="text-left font-weight-bold">RS. 1,200</p>
                <h5 className="text-left font-weight-bold">Quantity</h5>
                <div class="input-group m-3">
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-primary"
                      type="button"
                      onClick={decNum}
                    >
                      -
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control text-center"
                    value={num}
                    onChange={handleChange}
                  />
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-primary"
                      type="button"
                      onClick={incNum}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="lin-br">
                  <hr />
                </div>

                <div className="butn">
                  <button>XS</button>
                  <button>S</button>
                  <button>M</button>
                  <button>L</button>
                </div>
                <div className="colr-btn">
                  <button className="btn-style">RED</button>
                </div>
                <div className="btn-cart">
                  <button className="add-cart">Add to cart</button>
                </div>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Provident repudiandae, velit harum id sunt aspernatur
                    facilis similique commodi voluptas, cum delectus quasi at
                    repellendus, earum laborum quo accusantium quidem modi?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCarousal;
