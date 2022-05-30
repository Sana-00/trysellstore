import React from "react";
import Common from "./Common";
import menimg from "../../images/men1.jpg";
import tshirt from "../../images/tshirt.webp";
import jeans from "../../images/menjeans.webp";
import polo from "../../images/polo.webp";
import menvid from "../../videos/menvideo.mp4";
function Men() {
  return (
    <div>
      <Common
        imgsrc={menimg}
        videosrc={menvid}
        text="Seek out adorable outfits and be à la mode this season. Cougar
      presents you an assortment of designs and patterns that are up
      to the minute, including T-Shirts, Casual Shirts, Polos, Jeans,
      Pants and many more. The wide variety of hues is offered by
      Cougar for men collection such as tie & dye, double colored,
      shaded colored, etc. Furthermore, if you are color obsessed and
      prefer single color family, than go for it as we have a variety
      of monochromatic color palette. Surf through our website and add
      the best styles to your cart."
        tShirt={tshirt}
        shirttxt="T-Shirt"
        jeans={jeans}
        jeanstxt="Jeans"
        polos={polo}
        polostxt="Polos"
      />
    </div>
  );
}

export default Men;
