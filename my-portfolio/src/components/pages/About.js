import React from "react";
import '../../styles/About.css'

const styles = {
    backgroundImage: {
        backgroundImage: `url('images/portfolio-bg.png')`,

        display: 'flex',
        paddingLeft: '25px',
        paddingRight: '25px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    mainTitle: {

        fontFamily: `'Playfair Display',
    serif`,
        color: 'white',
        fontSize: '5rem',
        textAlign: 'center',
    },
    imgDiv: {
        display: 'flex',
        justifyContent: 'center',
    },
    img: {
        borderRadius: '50%',
        border: 'solid 2px black',
        maxHeight: '250px',
        width: 'auto'

    },
    introText: {
        fontFamily: `'Playfair Display',
    serif`,
        color: 'white',
        fontSize: '3rem',
        textAlign: 'center',
    },
    contactText: {
        fontFamily: `'Playfair Display',
    serif`,
        color: 'white',
        fontSize: '2rem',
        textAlign: 'center',
    },
    container: {
        paddingTop: '10%',
        paddingBottom: '10%'
    },
    contentContainer: {
        backgroundColor: 'black',
        border: 'solid 2px #01f9c6',

    }
}

//renders about page
export default function About() {
    return (
        <div className={'bg-image img-fluid'} style={styles.backgroundImage}>
            <div className="container container-div" style={styles.container}>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div style={styles.imgDiv}>
                            <img style={styles.img} src="images/profile.jpeg"></img>
                        </div>

                        <h1 style={styles.mainTitle}>Rashida Kapadia</h1>
                        <p style={styles.introText}>Full Stack Web Developer</p>

                    </div>

                    <div className="col-lg-6 col-sm-12" style={styles.contentContainer}>
                        <p style={styles.contactText}>
                            A passionate linguist and an ardent learner, web development is the perfect match to channel my
                            linguistic and creative
                            flare at the same time. Back end programming satiates my passion for problem solving while front end
                            design is the
                            perfect outlet for my artistic nature. I aspire to bring my excellent verbal and written communication
                            skills alongside
                            the coding ones that I'm continually acquiring.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}