import React from 'react'

const from=()=>{
    return(
        <box>
            <div className='container'>
                <div className='app_wrapper'>
                    <div>
                        <center>
                        <h2 className='title'>JOB REGISTRATION</h2>
                        </center>
                    </div>
                    <from className='main'>
                        <div className='class'>
                            <label className='label'> Frist Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className='input' type='text' placeholder='Frist name'/>
                        </div>
                        <div className='class'>
                            <label className='label'> Last Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                            <input className='input' type='text' placeholder='Last name'/>
                        </div>
                        <div className='class'>
                            <label className='label'>Phone Number</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className='input1' type='Phone' placeholder='Phone Number'/>
                        </div>
                        <div className='class'>
                            <label className='label'>Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className='input2' type='text' placeholder='Email'/>
                        </div>
                        <div className='class'>
                            <label className='label'> Current Adress</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className='input3' type='text' placeholder='Current Adress '/>
                        </div>
                        <div className='class'>
                            <label className='label'>Education</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className='input4' type='text' placeholder='education'/>
                        </div>
                    
                        <div className='class'>
                            <label className='label'>Skills</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className='input5' type='text' placeholder='Skills'/>
                        </div>
                        <div className='class'>
                            <label className='label'>Gender</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className='input6' type='text' placeholder='gender'/>
                        </div>
                        <div className='class'>
                            <label className='label'>Age</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className='input12' type='text' placeholder='age'/>
                        </div>
                        <div className='class'>
                            <label className='label'>whats your ctc</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className='input7' type='text' placeholder=''/>
                        </div> 
                        <div className='class'>
                            <label className='label'>explain any one project</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className='input8' type='text' placeholder=''/>
                            {/* <textarea cols='20' rows='10' placeholder='' /> */}
                        </div> 
                        <div className='class'>
                            <label className='label'>File</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className='input9' type='file' placeholder=''/>
                        </div> 
                        
                        <div className='class'>
                        <input className='label1' type='submit' placeholder='sumbit'/>

                            
                        </div>
                    
                        
                    </from>
                </div>

            </div>
        </box>
    )
}
export default from