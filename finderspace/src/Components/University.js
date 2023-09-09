import React from "react";
import image from "./university2_image.jpg";
import enggimage from "./Engg_image.jpg";
import medicalimage from "./Medical_image.png";
import bbaimage from "./BBA_image.jpg";
import mbaimage from "./MBA_image.jpg";
import avatar from "./avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faCircle,faMessage,faBook,faBuildingColumns,faGear,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Courses from "./Courses";
import "./University.css";

const University = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="user-con">
          <img src={avatar} alt="" />
          <div className="text">
            <h2>User</h2>
          </div>
        </div>
        <ul className="features">
          <div className="feature">
            <FontAwesomeIcon icon={faHouse} />
            <li>Dashboard</li>
          </div>

          <div className='feature'>
          <FontAwesomeIcon icon={faCircle} />
            <li>About</li>
          </div>
          <div className='feature'>
          <FontAwesomeIcon icon={faMessage} />
            <li>Contact</li>
          </div>
          <div className='feature'>
          <FontAwesomeIcon icon={faBook} />
            <li>Courses</li>
          </div>
          <div className='feature'>
          <FontAwesomeIcon icon={faBuildingColumns} />
            <li>University</li>
          </div>
          <div className='feature'>
          <FontAwesomeIcon icon={faGear} />
            <li>Settings</li>
          </div>
        </ul>
      </div>
      <div className="col-9">
        <div className="university">
          <div id="university-name">
            <h1>University of Queensland</h1>
            <FontAwesomeIcon className='location-icon' icon={faLocationDot} />
            <p className='location'>Australia</p>
            <p className="details"></p>500m walk to metro . Close to market . Best College in Australia <br /> 1000+ Alumnis placed in Top MNCs
            <br />
            <button className='explore'>Explore Now</button>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={image}
              className="card-img-top university-image"
              alt="..."
            />
          </div>
          <div className="courses course-list">
            <h2>Courses</h2>
            <div className="course-1">
              <Courses title="Engineering" image={enggimage} />
              <Courses title="Medical" image={medicalimage} />
            </div>
            <div className="course-2">
              <Courses title="BBA" image={bbaimage} />
              <Courses title="MBA" image={mbaimage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default University;
