import { useState } from 'react';
import './Registration.css';
import { useHistory } from 'react-router-dom'


function Registration() {

    let historyUsage = useHistory();
 
    let [userData,setUserData] = useState({
        firstName: "",
        firstNameError:false,
        lastName: "",
        lastNameError:false,
        adress: "",
        adressError:false,
        city:"",
        cityError:false,
        state:"",
        stateError:false,
        postelCode:"",
        postelCodeError:false,
        number:"",
        numberError:false,
        email:"",   
        emailError:false,
        password:"",
        passwordError:false,
        collectionId : "BarathCollection"
    })

        async function registerFunction(e){
            e.preventDefault();
            
         let dataSentOrNot =  await fetch ('https://rcz-backend.onrender.com/api/addUserRegistrationAnciMart',{
            method :'POST',
            headers : {
              'content-type' : 'application/json'
            },
            body : JSON.stringify({...userData, userId : userData.email, userPass : userData.password})
          });
          if(dataSentOrNot){
            debugger
            historyUsage.push("/SignIn");
            setTimeout(() => {
              window.location.reload();
            }, 100);
          }
        }
    
    return (
        <>
           <div id="Container">
                <div id="mainContainer">
                    <div id="subContainer">
                        <div>
                    <h3>REGISTRATION FORM</h3>
                    <div class="align">
                        <div>                       
                        <input type={"text"} 
                        onChange={(e)=>{

                            let hasError = false;
                            if(!e.target.value.length || !isNaN(e.target.value)){
                                hasError = true
                            }
                            setUserData({...userData, firstName:e.target.value, firstNameError:hasError})
                        }}
                         placeholder="First Name" class="space" id="fn"></input>
                         {userData.firstNameError ? <p style={{color:"red"}}> Check the FirstName</p> : null}
                         </div>
                         <div>
                        <input type={"text"}
                        onChange={(e)=>{
                            let hasError = false;
                            if(!e.target.value.length || !isNaN(e.target.value)){
                                hasError = true;
                            }
                            debugger
                            setUserData({...userData, lastName:e.target.value,lastNameError:hasError})
                        }}
                         placeholder="Last Name" class="space" id="ln"></input><br />
                          {userData.lastNameError ? <span style={{color:"red"}}>Check the Last Name</span>:null}
                          </div>
                    </div>

                    <div>
                        <input type={"text"}
                        onChange={(e)=>{
                            debugger
                            let hasError =false;
                            if(!e.target.value.length){
                                hasError = true;
                            }
                            
                            setUserData({...userData, adress:e.target.value, adressError:hasError})
                        }}
                         placeholder="Adress" id="adress" class="space"></input>
                         {userData.adressError ? <span style={{color:"red"}}>Fill the adress</span> :null}
                    </div>

                    <div class="align">
                        <div>
                        <input type={"text"}
                        onChange={(e)=>{
                            let hasError = false;
                            if(!e.target.value.length){
                                hasError = true;
                            }
                            debugger
                            setUserData({...userData, city:e.target.value, cityError:hasError})
                        }}
                        placeholder="City" class="space" id="city"></input>
                        {userData.cityError ? <span style={{color:"red"}}>Please fill the city</span>:null}  
                        </div>
                        <div>
                        <input type={"text"}
                        onChange={(e)=>{
                            let hasError = false;
                            if(!e.target.value.length){
                                hasError = true;
                            }
                            debugger
                            setUserData({...userData, state:e.target.value,stateError:hasError})
                        }}
                         placeholder="State" class="space" id="state"></input><br />
                         {userData.stateError ? <span style={{color:"red"}}>Please fill the state</span>:null}
                         </div>
                    </div>
                    <div>
                        <input type={"text"}
                        onChange={(e)=>{
                            let hasError = false;
                            if(e.target.value.length <= 6 || isNaN(e.target.value)){
                                hasError = true;
                            }
                            debugger
                            setUserData({...userData, postelCode:e.target.value, postelCodeError:hasError })
                        }}
                         placeholder="Postel Code"class="space" id="pc"></input>
                         {userData.postelCodeError ? <span style={{color:"red"}}>Please fill the Postel code</span>:null}
                    </div>
                    <div>
                        <select id="dropDown" class="space"><option>+91</option></select>
                        <input type={"text"} 
                        onChange={(e)=>{
                            let hasError = false;
                            if(e.target.value.length <= 9 || isNaN(e.target.value) ){
                                hasError = true
                            }
                            debugger
                            setUserData({...userData, number:e.target.value,numberError:hasError})
                        }}
                        placeholder="Number" class="space" id="num"></input>
                        {userData.numberError ? <span style={{color:"red"}}>Please fill the Number</span>:null}
                    </div>
                    <input type={"email"} 
                    onChange={(e)=>{
                        let hasError = false;
                        debugger
                        if(!e.target.value.length < 0 || !e.target.value.includes("@") || !e.target.value.includes(".com") || !e.target.value.includes("gmail")){
                            hasError = true;
                        }
                        
                        setUserData({...userData, email:e.target.value, emailError:hasError})
                    }}
                    placeholder="Email" class="space" id="mail"></input><br />
                    {userData.emailError ? <span style={{color:"red"}}>Please Fill the email id</span>:null}
                    <input type={"password"} 
                    onChange={(e)=>{
                        let hasError= false;
                        if(e.target.value.length < 8 || !e.target.value.includes("@") ){
                            hasError = true;
                        }
                        debugger
                        setUserData({...userData, password:e.target.value, passwordError:hasError})
                    }}
                    placeholder="Password"class="space" id="pass"></input><br />
                    {userData.passwordError ? <span style={{color:"red"}}>It should but more than 8 charaters & a special charaters</span>:null}

                    <button onClick={registerFunction} class="space" id="button">Create Account</button>
                    </div>
                    
                    <div>
                    <img id="imgR" src="https://images.unsplash.com/photo-1580014317999-e9f1936787a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG11c3Rhbmd8ZW58MHx8MHx8&w=1000&q=80" alt="carn" />
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Registration