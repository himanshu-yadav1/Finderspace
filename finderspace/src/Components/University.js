import React from 'react'
import image from './university2_image.jpg'
import enggimage from './Engg_image.jpg'
import medicalimage from './Medical_image.png'
import bbaimage from './BBA_image.jpg'
import mbaimage from './MBA_image.jpg'
import './University.css'
import Courses from './Courses'

const University = () => {
    return (
        <div className="row">
            <div className="col">
                1
            </div>
            <div className="col-9">
                <div id="university-name">
                    <h1>University Name</h1>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={image} className="card-img-top university-image" alt="..." />
                </div>

                <div className="courses">
                    <h2>Courses</h2>
                    <Courses title="Engineering" image={enggimage}/>
                    <Courses title="Medical" image={medicalimage}/>
                    <Courses title="BBA" image={bbaimage}/>
                    <Courses title="MBA" image={mbaimage}/>
                </div>
            </div>
        </div>
    )
}

export default University
