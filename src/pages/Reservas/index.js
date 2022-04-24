import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeReserve} from '../../store/modules/reserve/actions'
import { MdDelete } from 'react-icons/md';
import './style.css';

export default function Reservas() {
 const dispatch = useDispatch();
 const reserves = useSelector(state => state.reserve);

 function handleRemove(id){
  dispatch(removeReserve(id));
 }

 return (
   <div>
    <h1 className="title">Voce solicitou {reserves.length} reservas</h1>

    {reserves.map(reserve => (
      <div className="reservas" key={reserve.id}>
        <img
        src={reserve.image}
        alt={reserve.title}
        />
        <strong>{reserve.title}</strong>
        <span>Quantidade: {reserve.amount}</span>
        <button
        type="button"
        onClick={()=> handleRemove(reserve.id) }
        >
        <MdDelete size={20} color="#191919" />
      </button>
    </div>
    ))}

    <footer>
      <button type="button">Solicitar Reservas</button>
    </footer>

   </div>
 );
}