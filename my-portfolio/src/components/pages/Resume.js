import React from "react";
import pdf from "../../Resume.pdf";

const styles = {
    mainDiv: {
        backgroundColor: 'black',
    },
    projectTitle: {
        fontFamily: `'Playfair Display',
    serif`,
        color: 'white',
        // paddingTop: '5%',
        fontSize: '7rem',
        textAlign: 'center',
        paddingTop: '30px',
        paddingBottom: '60px'
    },
    listStyle: {
        color: 'white',
    },
    cardStyle: {
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingBottom: '5%'
        // paddingTop: '1%'
    },
    skillsCard: {
        backgroundColor: 'black',
        border: 'solid 2px white',


    },
    skillsCardTitle: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700',
        borderBottom: 'solid 2px #01f9c6',
        padding: '3%'
    },
    pTag: {
        color: 'white',
        fontFamily: `'Playfair Display',
    serif`,
        textAlign: 'center',
        fontSize: '2rem',
        paddingBottom: '2%'
    },
    lastDiv: {
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center'
    }
}

export default function Resume() {
    return (
        <div style={styles.mainDiv}>
            <h1 style={styles.projectTitle}>
                Tech Stack
            </h1>
            <div className="card-group" style={styles.cardStyle}>
                <div className="card" style={styles.skillsCard}>
                    <div className="card-body">
                        <h5 className="card-title" style={styles.skillsCardTitle}>Front End</h5>
                        <ul style={styles.listStyle}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                            <li>Tailwind</li>
                            <li>React-Redux</li>
                            <li>JQuery</li>
                        </ul>
                    </div>
                </div>
                <div className="card" style={styles.skillsCard}>
                    <div className="card-body">
                        <h5 className="card-title" style={styles.skillsCardTitle}>Back End</h5>
                        <ul style={styles.listStyle}>
                            <li>Node.JS</li>
                            <li>Apollo</li>
                            <li>APIs (3P, Server-side)</li>
                            <li>ORM (Sequelize, Mongoose)</li>
                            <li>Express.JS</li>
                            <li>Unit Testing (Jest)</li>

                        </ul>
                    </div>
                </div>
                <div className="card" style={styles.skillsCard}>
                    <div className="card-body">
                        <h5 className="card-title" style={styles.skillsCardTitle}>Databases</h5>
                        <ul style={styles.listStyle}>
                            <li>SQL</li>
                            <li>GraphQL</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>IndexedDB</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={styles.lastDiv}>
                <span style={styles.pTag}> <a style={styles.pTag} href={pdf}>Download resume here</a></span>
            </div>
        </div>

    )
}