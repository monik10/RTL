import React from 'react'

const Application = () => {
  return (
   <>
   <h1>Job Application Form</h1>
   <h2>Section 1</h2>
   <p>Lorem ipsum dolor sit amet consectetur a</p>
   <span title="close">X</span>
   <img src="https://images.unsplash.com/photo-1682319375705-5668951c16ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" alt="Leaf"/>
   <div data-testid="custom-element">Custom HTML element</div>
    <form>
        <div>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='Full Name' value={"Monika"} onChange={()=>{}}/>
        </div>
        <div>
            <label htmlFor='bio'>Bio</label>
            <textarea id="bio" name='bio'/>
        </div>
        <div>
        <label htmlFor='job-location'>Job Location</label>
        <select id='job-location'>
            <option value={""}>Select a Country</option>
            <option value={"US"}>United Kingdom</option>
            <option value={"UK"}>Canada</option>
            <option value={"IN"}>India</option>
            <option value={"AU"}>Australia</option>
        </select>
        </div>
        <div>
            <label htmlFor='terms'>
                <input type='checkbox' id='terms'/>I agree  to the terms and conditions
            </label>
        </div>
        <div>
            <button disabled>Submit</button>
        </div>
    </form>
    </>
  )
}

export default Application
