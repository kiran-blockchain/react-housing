import {useDispatch} from 'react-redux';
import { increment, decrement } from "../state/actions";

const Sender = () => {
    const dispatch = useDispatch();
    return <div>
        <button onClick={e => {
            dispatch(increment());
        }}>Increment</button>
        <button
            onClick={e => {
                dispatch(decrement())
            }}
        >Decrement</button>
    </div>
}

export default Sender;