import './Registration.css'
function Registration() {
    return (
        <>
           <div id="Container">
                <div id="mainContainer">
                    <div id="subContainer">
                        <div>
                    <h3>REGISTRATION FORM</h3>
                    <div>
                        <input
                         type={"text"} placeholder="First Name" class="space" id="fn"
                          ></input>
                        <input type={"text"} placeholder="Last Name" class="space" id="ln"></input><br />
                    </div>
                    <div>
                        <input type={"text"} placeholder="Adress" id="adress" class="space"></input>
                    </div>
                    <div>
                        <input type={"text"} placeholder="City" class="space" id="city"></input>
                        <input type={"text"} placeholder="State" class="space" id="state"></input>
                    </div>
                    <div>
                        <input type={"text"} placeholder="Postel Code"class="space" id="pc"></input>
                    </div>
                    <div>
                        <select id="dropDown" class="space"><option>+91</option></select>
                        <input type={"text"} placeholder="Number" class="space" id="num"></input>
                    </div>
                    <input type={"email"} placeholder="Email" class="space" id="mail"></input><br />
                    <input type={"password"} placeholder="Password"class="space" id="pass"></input><br />
                    <button class="space" id="button">Create Account</button>
                    </div>
                    
                    <div>
                    <img src="https://images.unsplash.com/photo-1580014317999-e9f1936787a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG11c3Rhbmd8ZW58MHx8MHx8&w=1000&q=80" alt="carn" />
                    </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Registration