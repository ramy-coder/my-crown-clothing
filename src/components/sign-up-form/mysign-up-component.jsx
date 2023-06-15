
import { useState,useContext } from "react";

import {createAuthUserFromEmailPwd, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../button/button.component';

import './mysign-up-styles.scss';

import { UserContext } from "../../context/user.context";

const formFieldObject = { 
    displayName : '',
    eMail : '',
    password : '',
    confirmPassword : ''
}
const SignUpForm = () => {

    const [formFields,setFormFields] = useState(formFieldObject);
    const {displayName, eMail, password, confirmPassword} = formFields;

    const {setCurrentUser} = useContext(UserContext);

    console.log(formFields);

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
        console.log("inside formFields", formFields);
    };

    const resetFormFields = () => {
        setFormFields( formFieldObject);
    }

    const handleSubmit = async(event) => {
            event.preventDefault();

            if(password !== confirmPassword)
            {
                alert("passwords do not match");
                return;
            }

            try{
            // console.log(eMail,password);
            const {user} = await createAuthUserFromEmailPwd(eMail, password);
            // console.log(user);

            setCurrentUser(user);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
            }catch(error)
            {
                if(error.code === 'auth/email-already-in-use')
                {
                    alert('Email already in use. Please use your email to sign-in');
                }
                else {
                console.log("there is an error while creating Auth user from firebase",error);
                }
            }
            }
        return(
        <div className="sign-up-container">
        <h2> Sign Up with email</h2>
        <form onSubmit={handleSubmit} >
        
        <FormInput label = 'Display Name' type ="text" required  name="displayName" value= {displayName} onChange={handleChange}/> 
   
        <FormInput label = 'Email' type = "email" required name = "eMail" value = {eMail}  onChange={handleChange}/ > 

        <FormInput label = 'Password' type = "password"required name="password" value={password} onChange={handleChange}/> 

        <FormInput label = 'Confirm Password' type = "password" required  name = "confirmPassword" value={confirmPassword} onChange={handleChange}/> 

        <CustomButton type = "submit"> Sign Up</CustomButton>
        </form>
        </div>
    );
}

export default SignUpForm;

