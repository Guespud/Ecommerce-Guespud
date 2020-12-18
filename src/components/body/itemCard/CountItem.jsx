import React,{useState} from 'react';
import {
    MDBBtn,
    MDBIcon,
    MDBRow,
  } from "mdbreact";

const CountItem = ({Stock}) => {

    const [counter, setCounter] = useState(0); //return[]

    //handleAdd
    const handleAdd = (Stock) => {
        setCounter(counter + 1);
    }
  
    const handleSubtract = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        } else {
            alert('0 es el valor minimo');
        }
    }
  

    return (
        <>
       <MDBRow>
        <div className="def-number-input number-input">
          <button onClick={handleSubtract} className="minus" disabled={counter === 0 ? 'disabled' : null } ></button>
          <input className="quantity" name="quantity" value={counter} onChange={()=> console.log('change')}
          type="number" />
          <button onClick={handleAdd} className="plus" disabled={counter === Stock ? 'disabled' : null }></button>
        </div>
        </MDBRow>
        <MDBBtn color="default">
        <MDBIcon icon="tshirt" className="mr-1" /> Agregar Al Carrito
      </MDBBtn> 
      <br/> 
        </>
    )
}

export default CountItem
