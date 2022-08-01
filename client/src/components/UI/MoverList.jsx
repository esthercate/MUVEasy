import React from 'react'
import { Col } from 'reactstrap'
import { Link } from "react-router-dom";
import '../../styles/mover-list.css'


const MoverList = ({profile}) => {

    const { imgUrl, title, price, moverName, location } = profile;
  
    return (
      <Col lg="4" md="4" sm="6" className="mb-5">
        <div className="mover_item px-5 py-4">
          <div className="imgurl">
            <img src={imgUrl} alt="" className="w-100 imgurl" />
          </div>

          <div className="mover_item-content mt-4">
            <h5 className="section__title text-center">{title}</h5>
            <h6 className="transport__price text-center">
              Ksh {price}00 <span>/ hr</span>
            </h6>

            <div className="mover_item-info d-flex align-items-center justify-content-between mt-3 mb-4">
              <span className=" d-flex align-items-center gap-1">
                <i class="ri-user-fill"></i> {moverName}
              </span>

              <span className=" d-flex align-items-center gap-1">
                <i class="ri-map-pin-line"></i> {location}
              </span>
            </div>

            <button className=" w-50 mover_item-btn mover_btn-transport">
              <Link to={`/movers/${moverName}`}>Contact</Link>
            </button>

            <button className=" w-50 mover_item-btn mover_btn-details">
              <Link to={`/movers/${moverName}`}>Details</Link>
            </button>
          </div>
        </div>
      </Col>
    );
}

export default MoverList