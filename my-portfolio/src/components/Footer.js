import React from "react";
import { SocialIcon } from 'react-social-icons';


const styles = {
    backgroundColor: {
        backgroundColor: 'black',
        // borderTop: 'solid 1px #01f9c6',
    },
    copyright: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }
}

export default function Footer() {
    return (
        <div style={styles.backgroundColor}>
            <footer className="text-center text-white" style={styles.backgroundColor}>

                <div class="container p-4 pb-0">

                    <section className="mb-4">


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><SocialIcon url="" label="Our portfolio" />
                        </a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><SocialIcon network="google" label="Our portfolio" />
                        </a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><SocialIcon network="github" url="https://github.com/rashida53" label="github" /></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><SocialIcon url="https://www.linkedin.com/in/rashida-kapadia-4435961a2" />
                        </a>

                    </section>

                </div>


                <div className="text-center p-3">
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">rashidakapadia.com</a>
                </div>

            </footer>
        </div>

    )
}