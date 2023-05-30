import { EmailAuthCredential } from "firebase/auth";
import { useState } from "react";

import {createAuthUserFromEmailPwd, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';

const formFieldObject = { 
    displayName : '',
    eMail : '',
    password : '',
    confirmPassword : ''
}
const SignUpForm = () => {

    const [formFields,setFormFields] = useState(formFieldObject);
    const {displayName, eMail, password, confirmPassword} = formFields;

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
            console.log(eMail,password);
            const {user} = await createAuthUserFromEmailPwd(eMail, password);
            console.log(user);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
            }catch(error)
            {
                console.log("there is an error while creating Auth user from firebase",error);
            }
            }
        return(
        <div >
        <h1> Sign Up with email</h1>
        <form onSubmit={handleSubmit} >
               
        <label> DisplayName</label>
        <input type ="text" required  name="displayName" value= {displayName} onChange={handleChange}/> 

        <label> Email</label>
        <input type = "email" required name = "eMail" value = {eMail}  onChange={handleChange}/ > 

        <label> Password </label>
        <input type = "password"required name="password" value={password} onChange={handleChange}/> 

        <label> Confirm Password </label>
        <input type = "password" required  name = "confirmPassword" value={confirmPassword} onChange={handleChange}/> 

        <button type = "submit"> Submit</button>
        </form>
        </div>
    );
}

export default SignUpForm;

