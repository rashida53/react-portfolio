import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

const styles = {
    mainDiv: {
        backgroundColor: 'black',

        display: 'flex',
        justifyContent: 'center'
    },
    formStyles: {
        padding: '5%',

    },
    inputStyles: {
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        boxSizing: 'border-box',
        border: 'solid 2px #01f9c6',
    },
    messageInput: {
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        boxSizing: 'border-box',
        border: 'solid 2px #01f9c6',
        height: '150px'
    },
    heading: {
        color: 'white',
        fontSize: '2rem',
        textAlign: 'center'
    },
    button: {
        width: '50%',
        backgroundColor: 'black',
        color: '#01f9c6',
        border: 'solid 2px #01f9c6',
    },
    buttonDiv: {
        display: 'flex',
        justifyContent: 'center',
        padding: '3%'
    },
    errorMessage: {
        color: 'white',
        textAlign: 'center'
    }
}

export default function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }

    };

    const handleValidation = (e) => {

        const target = e.target.value;

        if (e.target.name === 'email' && target.length === 0) {
            setErrorMessage('Email is required');
            return;
        }
        if (e.target.name === 'email' && !validateEmail(target)) {
            setErrorMessage('Email is invalid');
            return;
        }

        if (e.target.name === 'name' && target.length === 0) {
            setErrorMessage('Name is required');
            return;
        }
        if (e.target.name === 'message' && target.length === 0) {
            setErrorMessage('Message is required');
            return;
        }

        setErrorMessage('');
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        setEmail('');
        setName('');
        setMessage('');
        setErrorMessage('');
    };

    return (
        <div style={styles.mainDiv}>

            <form className="form" style={styles.formStyles}>
                <h3 style={styles.heading}>You can contact me here!</h3>
                <div className="form-group">
                    <input
                        style={styles.inputStyles}
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        onBlur={handleValidation}
                        type="email"
                        placeholder="email"
                    />
                </div>
                <div className="form-group">
                    <input
                        style={styles.inputStyles}
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        onBlur={handleValidation}
                        type="text"
                        placeholder="name"
                    />
                </div>
                <div className="form-group">
                    <input
                        style={styles.messageInput}
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        onBlur={handleValidation}
                        type="text"
                        placeholder="message"
                    />
                </div>
                <div style={styles.buttonDiv}>
                    <button style={styles.button} type="button" onClick={handleFormSubmit}>Submit</button>
                </div>
                {errorMessage && (
                    <div>
                        <p style={styles.errorMessage}>{errorMessage}</p>
                    </div>
                )}
            </form>

        </div>
    )
}