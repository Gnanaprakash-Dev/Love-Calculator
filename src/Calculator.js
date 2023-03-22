import React, { useState } from 'react';

export default function Calculator() {
    const initialFunc = ()=>{
        let initialObj = {
            yourName : "",
            partnerName : "",
            error:false,
            score:""
        }
        return initialObj;
    }
const [initialState , setInitialState] = useState(initialFunc());


const handleChange = (e)=>{
    let target = e.target;
    let name   = target.name;
    let value  = target.value;
    setInitialState({...initialState, [name] : value})
  }

const submit = (e)=>{
    e.preventDefault();
    if(initialState.yourName !=="" && initialState.partnerName !==""){
        const regex = /^[a-zA-Z]+$/;
        if(regex.test(initialState.yourName) && regex.test(initialState.partnerName)){
          setInitialState({...initialState, score : Math.floor(Math.random() * 100) + 10})             
        }else{
            alert("Please Enter Only a Number")
        } 
    }
    else
    {
        setInitialState({...initialState, error:true})
    }
}
const reset = ()=>{    
    setInitialState(initialFunc())
}


  return (
    <div className='bg-image'>
        <center>
          <div className='container'>
                <h1 className='welcome pt-sm-5 pt-2'>Welcome</h1>
                <p className='score py-sm-3 py-2'>Calculate Your Love Score ❤️ </p>
                    <div className='col-xl-5 col-lg-6 col-md-10 col-12'>
                               <div className='box p-sm-5 p-4 rounded'>
                                        <form>
                                            <div class="mb-3 text-start">
                                            <label for="exampleInputEmail1" class="form-label">Enter Your Name</label>
                                            <input type="text" class={`form-control ${(initialState.error && initialState.yourName ==="") && "border-2 border-danger"}`} name="yourName" value={initialState.yourName}  onChange={handleChange}  />
                                            {(initialState.error && initialState.yourName ==="") && (<small className='text-danger'>Enter Your Name</small>)}
                                            </div>
                                            <div class="mb-4 text-start">
                                            <label for="exampleInputPassword1" class="form-label">Enter Your Partner Name</label>
                                            <input type="text" className={`form-control ${(initialState.error && initialState.partnerName ==="") && "border-2 border-danger"}`} name="partnerName" value={initialState.partnerName}  onChange={handleChange} />
                                            {(initialState.error && initialState.partnerName ==="") && (<small className='text-danger'>Enter Your Partner Name</small>)}                                           
                                            </div>    
                                            <div className='d-flex font'>
                                                <button type="submit" class="btn btn-danger w-100 mx-2" onClick={submit}>Submit</button>
                                                <button type="button" class="btn btn-danger w-100 mx-2" onClick={reset}>Reset</button>
                                            </div>
                                        </form>
                               </div>

                   </div>
            </div>           
        </center>
            {initialState.score !==""&& (
            <div className='heart-container'>
            <div className='heart'>
            <div class="heart-loader"></div>
            <p className='scores m-0'>{initialState.score} %</p>            
            </div>    
            <button type="button" class="btn btn-danger  m-3 float-end font" onClick={()=>setInitialState(initialFunc())}>close</button>        
            </div>
            )}
       
    </div>
  )
}
