import {useLocation} from 'react-router-dom'

export default function Confirmation() {

    const {state} = useLocation()
    const { firstName, lastName, email} = state.person

    return (
        <div className="container">
            <h1>Thank You! {firstName} {lastName}</h1>
            <p>You're now registered for SchoolHacks with the email {email}.</p>
        </div>
    );
}