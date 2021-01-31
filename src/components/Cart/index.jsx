import {useContext} from 'react';
import {Store} from '../../store';

const Cart = () => {
    const [data, setData] = useContext(Store);
    const [prods, setProds] = useState([]);

    useEffect(() => {
        if(data.items.length) {
            const productos = JSON.stringify(data.items);
            localStorage.setItem('productos', productos);
        }

        if(localStorage.getItem('productos')) {
            setProds(JSON.parse(localStorage.getItem('productos')));
        } else {
            setProds(data.items);   
        }

    }, [data.items])

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