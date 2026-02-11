

export const checkvalidateSignIn = (email, password, setEmailError, setPasswordError) => {

    const emailChecker = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordChecker = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    if(!emailChecker && !passwordChecker){
        setEmailError("Please enter a valid email address.");
        setPasswordError("Please enter a valid password");
    } else if(!emailChecker){
        setEmailError("Please enter a valid email address.");
        setPasswordError("");
    } else if(!passwordChecker){
        setEmailError("");
        setPasswordError("Please enter a valid password");
    }else{
        setEmailError("");
        setPasswordError("");
    }

    return null;
}
export const checkvalidateSignUp = (name, email, password, setEmailError, setPasswordError, setNameError) => {

    const emailChecker = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordChecker = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    if(!emailChecker && !passwordChecker && !name){
        setEmailError("Please enter a valid email address.");
        setPasswordError("Please enter a valid password");
    } else if(!emailChecker){
        setEmailError("Please enter a valid email address.");
        setPasswordError("");
        setNameError("");
    } else if(!passwordChecker){
        setEmailError("");
        setPasswordError("Please enter a valid password");
        setNameError("");

    }else if(!name){
        setEmailError("");
        setPasswordError("");
        setNameError("Please enter your name");

    }
    
    else{
        setEmailError("");
        setPasswordError("");
        setNameError("");

    }

    return null;
}



// export default {checkvalidateSignUp, checkvalidateSignIn};