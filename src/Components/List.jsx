import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import UpdateIcon from '@mui/icons-material/Update';
import '../Components/Custom.css'
import { Delete } from '@mui/icons-material';

function List({data , key}) {
  return (
    <div className='list' key={key}>

     <div className='data'>  {data}</div> 

<div>
<EditIcon  className='edit' />
        <UpdateIcon className='update' />
        <Delete className='delete' />

</div>
        

        </div>
  )
}

export default List