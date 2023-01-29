import React,{useState} from 'react'
import axios from 'axios'



function Login() {
    const [name, setName] = useState('');
    const [list, setList] = useState('');

    const displayInfo = () =>{
        axios.get("https://api.genderize.io/?name="+name+"")
        .then((res) =>{
            console.log(res.data)
            setList('Your gender '+ '  ' + 'is'  +'        '+ res.data.gender)
        })
    }

  return (
    <>
    
 <div className=" mobile:w-80 lg:w-[80%]  mobile:mx-4  my-40 p-20 bg-white rounded-[30px]  md:h-80 mobile:h-80">
            
            <div className="md:flex   mt-10 mobile:px-1">
            
                <input
                    type="text"
                    className=" px-4 md:w-80    py-2   bg-white border border-blue rounded-[30px]  "
                    placeholder="Search Your Gender.."
                    onChange={(event)=>{setName(event.target.value)}}
                />
                <button onClick={ displayInfo } className="mobile:px-6 mobile:py-1   py-4 text-white bg-blue  rounded-[30px] mobile:ml-10 mobile:my-2 ">
                    Search
                </button>
            </div>
             
            <div className=' mt-2  text-black font-bold uppercase '>
                  <p className='text-smm'>{list}</p>
            </div>
        </div>   

        
        

        
 
    
    
    </>
  )
}

export default Login