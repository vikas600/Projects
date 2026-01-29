import React, { useState } from 'react'
import {X} from 'lucide-react';


const App = () => {
 
  const [title, setTitle] = useState('')
  const [notes, setNotes]=useState('')

  const [task, setTask] =useState([])
  
  const submitHandler= (e)=>{
    e.preventDefault()
    const copyTask=[...task];

    copyTask.push({title,notes})
    setTask(copyTask)
    
    setTitle('')
    setNotes('')
  }

  const deleteTask= (idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1);
    setTask(copyTask)
  }
  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={submitHandler}  className='flex lg:w-1/2  items-start flex-col gap-4 p-10 '>

        <h1 className='text-3xl font-bold'>Add Notes</h1>
         {/* pehla input */}
        <input value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }} className='px-5 font-medium w-full py-2 border-2 rounded outline-none'  type="text" placeholder='Enter Notes Heading' />
        {/* Detailed Input  */}
        <textarea 
        onChange={(e)=>{
          setNotes(e.target.value)
        }} value={notes} type='text' className='px-5 font-medium w-full h-32 py-2 border-2 rounded outline-none' placeholder='Enter Details' ></textarea>
        <button className=' active:bg-gray-300 outline-none px-5 font-medium w-full py-2 rounded bg-white text-black'>Add Note</button>
  
      </form>
      <div className=' lg:border-l-2  border-l-gray-500 p-10 lg:w-1/2'>
        <h1 className='text-4xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-full overflow-auto '>
        
        {task.map((e,idx)=>{
          return <div key={idx} className=" relative w-40 h-52 py-6 px-4 rounded-xl bg-cover text-black bg-[url('https://imgs.search.brave.com/0URcI9QeB20KSXJcNsLG9ZSyWOYKDXMQXWO0HwVINbY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NTg0LzQ2Mi9zbWFs/bC9ibGFuay1zcGFj/ZS13aGl0ZS1zdGlj/a3ktbm90ZS1wbmcu/cG5n')] ">
            <h2 onClick={()=>{
              deleteTask(idx)
            }} className=' active:scale-95 absolute top-1 right-2 bg-red-500 text-xs p-1 rounded-full'><X/></h2>
            <h3 className='mt-2 leading-tight text-xl font-bold '>{e.title}</h3>
            <p className='mt-3 leading-tight font-medium text-gray-500'>{e.notes}</p>
          </div>
        })}
       
          
        </div>
      </div>
    </div>
  )
}

export default App