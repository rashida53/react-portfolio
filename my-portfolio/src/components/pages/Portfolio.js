import React from "react";
import '../../styles/Portfolio.css';
import { FaExternalLinkAlt } from "react-icons/fa"
import { FaGithub } from 'react-icons/fa'


const styles = {
    mainDiv: {
        backgroundColor: 'black'
    },
    bottomCards: {
        paddingTop: '40px'
    },
    zoom: {
        padding: '20px',
        backgroundColor: 'white',
        transition: 'transform .2s',
        margin: '0 auto',
        bordeStyle: 'solid',
        borderColor: '#01f9c6',
        borderWidth: '4px'
    },
    zoomHover: {
        transform: 'scale(0.9)'
    },
    projectTitle: {
        paddingTop: '5%',
        fontFamily: `'Playfair Display',
    serif`,
        color: 'white',
        fontSize: '7rem',
        textAlign: 'center',
        paddingBottom: '60px',
    },
    projectsContainer: {
        padding: '60px'
    },
    header: {
        fontFamily: `'Playfair Display',
    serif`,
        backgroundColor: 'white',
        color: '#014d4e',
        bordeStyle: 'solid',
        borderColor: '#01f9c6',
        borderWidth: '4px'
    }
}

export default function Portfolio() {
    return (
        <div id="project-section" class="bg-image background-img project-section" style={styles.mainDiv}>
            < h1 style={styles.projectTitle} > My projects</h1 >
            <div className="container ">
                <div className="row" style={styles.projectsContainer}>
                    <div className="col-lg-8 col-sm-12">
                        <div className="card h-100 zoom" id="cardDiv" style={styles.zoom}>
                            <a href="https://arcane-hollows-20210.herokuapp.com/">
                                <img className="card-img-top bg-image hover-zoom" src="images/everrands.png"
                                    alt="Card image cap"></img>
                                <span className="text">
                                    <FaExternalLinkAlt size={'30px'} color={'black'} padding={'10px'} url={'https://arcane-hollows-20210.herokuapp.com/'} />
                                    <FaGithub size={'30px'} color={'black'} url={'https://github.com/rashida53/event-handler'} />
                                </span>

                            </a>

                        </div>


                    </div>
                    <div className="col-lg-4 col-sm-12 second-card">
                        <div className="card h-100 zoom" id="cardDiv" style={styles.zoom}>
                            <a href="https://rashida53.github.io/project-one/">
                                <img className="card-img-top hover-zoom" src="images/foodle.png" alt="Card image cap"></img>
                                <span className="text">
                                    <FaExternalLinkAlt size={'30px'} color={'black'} padding={'10px'} url={'https://rashida53.github.io/project-one/'} />
                                    <FaGithub size={'30px'} color={'black'} url={"https://github.com/rashida53/project-one"} />
                                </span>
                            </a>

                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12" style={styles.bottomCards}>
                        <div className="card h-100 zoom" id="cardDiv" style={styles.zoom}>
                            <a href="https://afternoon-cove-74927.herokuapp.com/">
                                <img className="card-img-top bg-image hover-zoom" src="images/note-taker.png"
                                    alt="Card image cap"></img>
                                <span className="text">
                                    <FaExternalLinkAlt size={'30px'} color={'black'} padding={'10px'} url={"https://afternoon-cove-74927.herokuapp.com/"} />
                                    <FaGithub size={'30px'} color={'black'} url={"https://github.com/rashida53/event-handler"} />

                                </span>
                            </a>

                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12" style={styles.bottomCards}>
                        <div className="card h-100 zoom" id="cardDiv" style={styles.zoom}>
                            <a href="https://rashida53.github.io/horiseon-refactor/">
                                <img className="card-img-top hover-zoom" src="images/horiseon-refactor.png" alt="Card image cap"></img>
                                <span className="text">
                                    <FaExternalLinkAlt size={'30px'} color={'black'} padding={'10px'} url={"https://rashida53.github.io/horiseon-refactor/"} />
                                    <FaGithub size={'30px'} color={'black'} url={"https://github.com/rashida53/horiseon-refactor"} />
                                </span>
                            </a>

                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12" style={styles.bottomCards}>
                        <div className="card h-100 zoom" id="cardDiv" style={styles.zoom}>
                            <a href="https://rashida53.github.io/work-day-scheduler//">
                                <img className="card-img-top w-100 hover-zoom" src="images/work-day-scheduler.png"
                                    alt="Card image cap"></img>
                                <span className="text">
                                    <FaExternalLinkAlt size={'30px'} color={'black'} padding={'10px'} url={"https://rashida53.github.io/work-day-scheduler/"} />
                                    <FaGithub size={'30px'} color={'black'} url={"https://github.com/rashida53/work-day-scheduler"} />
                                </span>
                            </a>

                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12" style={styles.bottomCards}>
                        <div className="card h-100 zoom" id="cardDiv" style={styles.zoom}>
                            <a href="https://rashida53.github.io/weather-dashboard/">
                                <img className="card-img-top w-100 hover-zoom" src="images/weather-dashboard.png"
                                    alt="Card image cap"></img>
                                <span className="text">
                                    <FaExternalLinkAlt size={'30px'} color={'black'} padding={'10px'} url={"https://rashida53.github.io/weather-dashboard/"} />
                                    <FaGithub size={'30px'} color={'black'} url={"https://github.com/rashida53/weather-dashboard"} />
                                </span>
                            </a>

                        </div>
                    </div>

                    <div className="col-lg-8 col-sm-12" style={styles.bottomCards}>
                        <div className="card h-100 zoom" id="cardDiv" style={styles.zoom}>
                            <a href="https://dry-stream-33901.herokuapp.com/">
                                <img className="card-img-top bg-image hover-zoom" src="images/tech-blog.png"
                                    alt="Card image cap"></img>
                                <span className="text">
                                    <FaExternalLinkAlt size={'30px'} color={'black'} padding={'10px'} url={"https://dry-stream-33901.herokuapp.com/"} />
                                    <FaGithub size={'30px'} color={'black'} url={"https://github.com/rashida53/tech-blog"} />
                                </span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

