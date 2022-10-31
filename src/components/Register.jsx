import { useState } from "react";
import {useRef} from "react";
import {useNavigate, useLocation} from "react-router-dom"

export default function Register() {
    const navigate = useNavigate()
    const emailRef = useRef(null);
    const fNameRef = useRef(null);
    const lNameRef = useRef(null);


    function handleSubmit(event) {
        event.preventDefault();
        const person = {
            email: emailRef.current.value,
            firstName: fNameRef.current.value,
            lastName: lNameRef.current.value
        }

        navigate("/confirmed", {state: {person}})
    }

    return (
        <div className="container">
            <h1>Register for SchoolHacks next Workshop</h1>
            <p>
                Make sure to grab your spot for this year's workshop! We love
                technology and consistently work towards being the premier provider of
                workshops and events that interest our students.
            </p>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input required type="text" name="fname" ref={fNameRef}/>
                </label>
                <label>
                    Last Name:
                    <input required type="text" name="lname" ref={lNameRef}/>
                </label>
                <label>
                    Email:
                    <input required type="text" name="email" ref={emailRef}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}
