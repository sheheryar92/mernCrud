import React,{useState} from 'react'


import '../Components/Custom.css'

import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import List from './List';
function Form() {


    const [todo, setTodo] = useState([])
    const [input, setInput] = useState('')

 

    function onClickHandler(event) {
        console.log('button clicked')
setTodo([...todo, input])
event.preventDefault()
setInput('')

    }


  return (
    <div className='form'>

<div className='input_container'>
  <form action="" method='submit'>


<TextField
          id="outlined-textarea"
          label="Add ToDo"
          placeholder="Enter ToDo"
     value={input}
          multiline
          fullWidth
          onChange={(e) => {  setInput(e.target.value)} }
        />
        
<Button fullWidth type='submit' variant="contained" onClick={onClickHandler}>ADD</Button>
</form>

</div>
<div>

{/* todo list */}
{todo.map( (t , i )=>  <List  data={t}  key={i} /> )}
{console.log(todo)}



</div>



    </div>
  )
}

export default Form