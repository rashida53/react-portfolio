
import React, { useState } from "react";
import About from "./pages/About"
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Navbar from "./Navbar";


export default function Project() {

    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Skills') {
            return <Skills />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Contact />;

    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}