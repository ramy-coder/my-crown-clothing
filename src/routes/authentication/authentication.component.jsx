
import SignUpForm from '../../components/sign-up-form/mysign-up-component.jsx'
import SignInForm from "../../components/sign-in-form/sign-in.component.jsx";

import './authentication.styles.scss'

const Authentication = () => {
    return (
        <div className='authentication-container'>
            <SignInForm/>

            <SignUpForm/>
        </div>
    )
}

export default Authentication;