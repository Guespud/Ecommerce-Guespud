import {useContext} from 'react';
import {Store} from '../../store';

const Cart = () => {
    const [data, setData] = useContext(Store);

    return (
        <>
            <h1>Estás en el cart</h1>
            {
                data.items.map(item => <h2>{item.title} (Ahora es tuya Solo Falta pagar) </h2> )
            }
        </>
    )
}

export default Cart;