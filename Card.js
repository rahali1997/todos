import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const Card = (props) => {
    return (
        <div className="card">
            <p>{props.item.content}</p>
            <IconButton onClick={()=>props.remove(props.item.id)}  aria-label="delete">
                <DeleteIcon  fontSize="small" />
            </IconButton>
        </div>
    )
}

export default Card
