import './SignIn.css'


function SignIn(){
    return(
        <>
        <div id="container-2">
                <div id="mainContainer-2">
                    <div id="subContainer-2">
                        <h3 id="signin">Sign In</h3>
                        <div >
                            <label class="space1">Login Id</label><br/>
                            <input type={"text"} placeholder="Email Id or Phone Number" id="login"></input>
                        </div>
                        <div >
                            <label class="space2">Password</label><br/>
                            <input type={"text"} placeholder="Password" id="pass-2"></input>
                        </div>
                        <button id="button-2">Sign In</button>
                        <p id="p-2">(or)</p>
                            
                        <div id="btn-2">
                            <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt='facebook'/>
                            Sign In with
                        </div>
                    </div>
                    <div>
                        <img src="https://live.staticflickr.com/8225/8530877664_fa3c51933f_b.jpg" alt='Car'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn