const validateEmailandPassword = (email, password) => {
    const isEmailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailvalid)   return "Email ID is Invalid"
    if(!isPasswordValid) return "Password is Invalid"

    return null;
}

export default validateEmailandPassword;