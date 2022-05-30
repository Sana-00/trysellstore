import React from "react";
import { useEffect, useRef } from "react";
import "../Men/allnavi.css";
function Common({
  text,
  imgsrc,
  videosrc,
  polos,
  polostxt,
  tShirt,
  shirttxt,
  jeans,
  jeanstxt,
}) {
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
      <section>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-12">
              <img className="img-all" src={imgsrc} alt="" />
            </div>
            <div className="col-12">
              <video
                style={{ width: "100%" }}
                className="mt-1"
                playsInline
                loop
                muted
                alt="All the devices"
                src={videosrc}
                ref={videoEl}
              />
            </div>
            <div className="col-md-6 offset-3 col-sm-12 p-text">
              <p>{text}</p>
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex">
                <div className="col-lg-4 offset-1 mt-5">
                  <div className="d-flex flex-column">
                    <img className="flex-img" src={tShirt} alt="" />
                    <h5 className="mt-3 t-shirt">{shirttxt}</h5>
                    <img className="flex-img" src={jeans} alt="" />
                    <h5 className="mt-3 t-shirt">{jeanstxt}</h5>
                  </div>
                </div>
                <div className="col-lg-4 offset-2 col-sm-12">
                  <img className="polos" src={polos} alt="" />
                  <h5 className="mt-3 t-shirt">{polostxt}</h5>
                </div>

                <div className="col-lg-4 offset-4 mt-5">
                  <div className="d-flex flex-column">
                    <img className="flex-img" src={tShirt} alt="" />
                    <h5 className="mt-3 t-shirt">{shirttxt}</h5>
                    <img className="flex-img" src={jeans} alt="" />
                    <h5 className="mt-3 t-shirt">{jeanstxt}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Common;
