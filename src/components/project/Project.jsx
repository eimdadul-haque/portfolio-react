import React from 'react'
import "./Project.css";

export default function Project() {
    return (
        <div className='container' id='project'>
            <h3 className='pro-title'>Some of my projects </h3>
            <div className="card-container-custom">

                <div className="card border-dark mb-3 shadow" style={{ maxWidth: "18rem" }}>
                    <h5 className="card-header">E-commerce Site </h5>
                    <div className="card-body text-dark">
                        <p className="card-text"><b>Technologies:</b> ReactJS , Redux & .Net Core API</p>
                        <div className='d-flex justify-content-between'>
                            <a className="card-title" href='https://github.com/eimdadul-haque/E-Commerce-Client-with-ReactJs-Redux' target="_blank" >Frontend code</a>
                            <a className="card-title" href='https://github.com/eimdadul-haque/E-Commerce-API-with-.Net-Core' target="_blank">Backend code</a>
                        </div>
                    </div>
                </div>

                <div className="card border-dark mb-3 shadow" style={{ maxWidth: "18rem" }}>
                    <h5 className="card-header">Social Site </h5>
                    <div className="card-body text-dark">
                        <p className="card-text"><b>Technologies:</b> ReactJS , Redux, .Net Core API & SignalR</p>
                        <div className='d-flex justify-content-between'>
                            <a className="card-title" href='https://github.com/eimdadul-haque/social-media-app-react' target="_blank" >Frontend code</a>
                            <a className="card-title" href='https://github.com/eimdadul-haque/Social-Media-App-Api-.Net-Core' target="_blank" >Backend code</a>
                        </div>
                    </div>
                </div>

                <div className="card border-dark mb-3 shadow" style={{ maxWidth: "18rem" }}>
                    <h5 className="card-header">Blog Site </h5>
                    <div className="card-body text-dark">
                        <p className="card-text"><b>Technologies:</b> .Net Core MVC , Js, Bootstrap & AJAX</p>
                        <div className='d-flex justify-content-between'>
                            <a className="card-title" href='https://github.com/eimdadul-haque/Blog-Site-with-.Net-Core-MVC' target="_blank" >Source code</a>
                        </div>
                    </div>
                </div>

                <div className="card border-dark mb-3 shadow" style={{ maxWidth: "18rem" }}>
                    <h5 className="card-header">Travel Site </h5>
                    <div className="card-body text-dark">
                        <p className="card-text"><b>Technologies:</b> React, Bootstrap & CSS</p>
                        <div className='d-flex justify-content-between'>
                            <a className="card-title" href='https://github.com/eimdadul-haque/Travel-Site-With-React' target="_blank" >Source code</a>
                        </div>
                    </div>
                </div>

                <div className="card border-dark mb-3 shadow" style={{ maxWidth: "18rem" }}>
                    <h5 className="card-header">Portfolio </h5>
                    <div className="card-body text-dark">
                        <p className="card-text"><b>Technologies:</b> React, Bootstrap & MUI</p>
                        <div className='d-flex justify-content-between'>
                            <a className="card-title" href='https://github.com/eimdadul-haque/portfolio-react' target="_blank" >Source code</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
