import { unstable_HistoryRouter } from "react-router-dom";
import { signInWithGooglePopup, db, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils.js";

import SignUpForm from '../../components/sign-up-form/mysign-up-component'

const SignIn = () => {

    const logGoogleUser = async() => {
        const response = await signInWithGooglePopup();
        console.log(response);
        const {user} = response;
         const userDocRef = await createUserDocumentFromAuth(user);
        
    }

    return (
        <div>
            <h1> I am the signin component</h1>
            <button onClick={logGoogleUser} >
                Sign In with Google
            </button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn;