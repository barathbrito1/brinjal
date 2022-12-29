import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './SignIn.css'
import { Space, Spin } from 'antd';


function SignIn(){
    let historyUsage = useHistory();
    let [spinningVisible,setSpinningVisible] = useState(false)
    let [userData,setUserData] = useState({
        loginId:"",
        loginError:false,
        password:"",
        passwordError:false,
        collectionId : "BarathCollection"
    })

    async function signInFunction(e){
        setSpinningVisible(true)
        e.preventDefault();
    
     let dataSentOrNot =  await fetch ('https://rcz-backend.onrender.com/api/anciMartLogin',{
        method :'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify({...userData, userId : userData.loginId, userPass : userData.password})
      });
      if(dataSentOrNot){
        dataSentOrNot.json().then(f=>{
            setSpinningVisible(false)
          historyUsage.push("/Card")
          setTimeout(() => {
            window.location.reload();
          }, 100);
        }).catch(e=>{
          alert("User Id & Password didn't match")
          setSpinningVisible(false)
        }) 
    }
}
    return(
       
        <>
         <Space direction="vertical" style={{ width: '100%' }}>
        <Spin tip="Loading..." spinning={spinningVisible}>
    
        <div id="container-2">
                <div id="mainContainer-2">
                    <div id="subContainer-2">
                        <h3 id="signin">Sign In</h3>
                        <div >
                            <label class="space1">Login Id</label><br/>
                            <input type={"text"}
                             onChange={(e)=>{
                                let hasError = false;
                                debugger
                                if(!e.target.value.length < 0 || !e.target.value.includes("@") || !e.target.value.includes(".com") || !e.target.value.includes("gmail")){
                                    hasError = true;
                                }
                                
                                setUserData({...userData, loginId:e.target.value, loginError:hasError})
                            }} placeholder="Email Id or Phone Number" id="login"></input><br />
                            {userData.loginError ? <span style={{color:"red"}}>Invalid mail id</span>:null}
                        </div>
                        <div >
                            <label class="space2">Password</label><br/>
                            <input type={"text"}
                            onChange={(e)=>{
                                let hasError = false;
                                if(e.target.value.length <= 8 || !e.target.value.includes("@")){
                                    hasError = true;
                                }
                                setUserData({...userData, password:e.target.value, passwordError:hasError})
                            }}
                            placeholder="Password" id="pass-2"></input><br />
                            {userData.passwordError ? <span style={{color:"red"}}>Check the password</span>:null}
                        </div>
                        <button id="button-2" onClick={signInFunction} >Sign In</button>
                        <p id="p-2">(or)</p>
                            
                        <div id="btn-2">
                            <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt='facebook'/>
                            Sign In with
                        </div>
                    </div>
                    <div>
                        <img id="imgS" src="https://live.staticflickr.com/8225/8530877664_fa3c51933f_b.jpg" alt='Car'/>
                    </div>
                </div>
            </div>
            </Spin>
            </Space>
        </>
    )
}


export default SignIn