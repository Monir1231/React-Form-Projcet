import { useState } from "react"

function From(){

    const [formdata, setFormData] =  useState({
        name:"",
        email:""
    });

    const [SubmittedData, SetSubmitData] = useState({
        name:"",
        email:""
    }); 

    const handleChange = (e)=> {
        const {name, value} =  e.target;
        setFormData((predata)=>({
            ...predata,
            [name]:value
        }))

    }

    const HandleSubmit = (event)=> {
        event.preventDefault();
        SetSubmitData(formdata)
    }



    return (
        <>
         <div className=" flex flex-col items-center justify-center h-screen ">
         <div className=" w-full p-10 max-w-md bg-gray-50  rounded-lg shadow-2xl  ">
            <h1 className="text-2xl font-semibold text-gray-800 text-center ">Login from</h1>
            <form >
                <div className="mt-3">
                    <label className=" block text-lg text-gray-600">Name:</label>
                    <input onChange={handleChange} type="text" placeholder="Enter your name" className="block mt-1 w-full px-3 py-2 border rounded-md" name="name" value={formdata.name}/>
                </div>

                <div className="mt-3">
                    <label className=" block text-lg text-gray-600">Email:</label>
                    <input onChange={handleChange} type="text" placeholder="Enter your Email" className="block mt-1 w-full px-3 py-2 border rounded-md" name="email" value= {formdata.email} />
                </div>

                <div className="mt-3">
                    <label className=" block text-lg text-gray-600">Password:</label>
                    <input type="password" placeholder="Enter your Password" className="block mt-1 w-full px-3 py-2 border rounded-md" />
                </div>

                <button onClick={HandleSubmit} className="mt-5 w-full bg-pink-500 py-2 rounded-lg hover:bg-pink-600 text-white hover:scale-105 transition-all duration-300 hover: cursor-pointer">Submit</button>
            </form>

            <div>
                <h2 className="text-center font-semibold mt-5 ">User from:</h2>
                <p className="text-gray-500 text-left py-2">Name:{SubmittedData.name}</p>
                <p className="text-gray-500 text-left">Email:{SubmittedData.email}</p>
            </div>
         </div>

         </div>
        </>
    )
}

export default From