const Button = () =>{
    const isLogin = false
    const Login = 'login'
    return  (
        <div className="flex justify-center items-end">
            <button className="border-2"> { isLogin ? "Login" : "Logout"} </button>
        </div>
    )

}

export default Button;