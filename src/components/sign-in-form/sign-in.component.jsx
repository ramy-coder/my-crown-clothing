import { useState } from "react";

import { createUserDocumentFromAuth,signinUserAuth, signInWithGooglePopup} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../button/button.component';

import './sign-in.styles.scss';

const formFieldObject = { 

    eMail : '',
    password : ''

}

const SignInForm = () => {

    const [formFields,setFormFields] = useState(formFieldObject);
    const { eMail, password} = formFields;

    console.log(formFields);

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
        console.log("inside formFields", formFields);
    };

    const resetFormFields = () => {
        setFormFields( formFieldObject);
    }

    const logGoogleUser = async() => {
        const response = await signInWithGooglePopup();
        console.log(response);
        const {user} = response;
         const userDocRef = await createUserDocumentFromAuth(user);
        
    }
    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
     
        const user = await signinUserAuth(eMail, password);
  
        console.log('User logged In successfully',user);
        // await createUserDocumentFromAuth(user, { displayName });
        resetFormFields();

        }catch(error)
        {
            switch(error.code)
            {
                case 'auth/wrong-password':
                    alert('Please verify your password');
                    break;
                
                case 'auth/user-not-found':
                    alert('User not found');
                    break;

                default:
                    console.log("Error logging in User",error);

            }
        }
        }

    return(
        <div className="sign-in-container">
        <h2>Already have an Account?</h2>
        <span> Sign In with email</span>
        <form onSubmit={handleSubmit} >
   
        <FormInput label = 'Email' type = "email" required name = "eMail" value = {eMail}  onChange={handleChange}/ > 

        <FormInput label = 'Password' type = "password"required name="password" value={password} onChange={handleChange}/> 

        <div className="buttons-container">
        <CustomButton  type = "submit"> Sign In</CustomButton>
        <CustomButton type = "button" buttonType = 'google' onClick={logGoogleUser} >
        Google Sign In
        </CustomButton>
        </div>
        </form>
        </div>
    );
}

export default SignInForm;