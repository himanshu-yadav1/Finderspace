import React from 'react'
import './University.css'

const Courses = (props) => {
    return (
        <div>
            <div class="card" style={{ width: "11rem" }}>
                <img class="card-img-top courses" src={props.image} alt="Card image cap" />
                <div class="card-body">
                    <h4 class="card-title">{props.title}</h4>
                </div>
            </div>
        </div>
    )
}

export default Courses
