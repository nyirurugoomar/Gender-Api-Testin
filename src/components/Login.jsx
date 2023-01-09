import React,{useState} from 'react'
import axios from 'axios'



function Login() {
    const [name, setName] = useState('');
    const [list, setList] = useState('');

    const displayInfo = () =>{
        axios.get("https://api.genderize.io/?name="+name+"")
        .then((res) =>{
            console.log(res.data)
            setList(res.data.name+ '  ' + 'is'  +'        '+ res.data.gender)
        })
    }

  return (
    <>
    
 <div className="  mx-60 my-40 p-40 bg-white rounded-[30px]">
            
            <div className="sm:flex  rounded-md">
            
                <input
                    type="text"
                    className="w-full px-10 py-2   bg-white border border-blue rounded-[30px]  "
                    placeholder="Search Your Gender.."
                    onChange={(event)=>{setName(event.target.value)}}
                />
                <button onClick={ displayInfo } className="px-10 text-white bg-blue  rounded-[30px] ml-10 ">
                    Search
                </button>
            </div>
             
            <div className='text-center mr-20 mt-20 text-32 text-blue font-bold uppercase '>
                  <p className=''>{list}</p>
            </div>
        </div>   
        

        
 
    
    
    </>
  )
}

export default Login