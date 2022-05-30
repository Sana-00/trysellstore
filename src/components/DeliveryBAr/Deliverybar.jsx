import React from "react";
import "../DeliveryBAr/Deliverybar.css";
function Deliverybar() {
  return (
    <div>
      <div className="container-fluid border">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <p className="delivery text-center ">
              Free delivery for orders above PKR 2500/-
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deliverybar;
