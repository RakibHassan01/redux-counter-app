// 03.reducer - increment -> count + 1 
import { DECREMENT, INCREMENT, RESET } from '../constant/counterConstant';
//         - decrement -> count - 1
//         - reset -> count = 0

const initialCounter = {count: 0}

const counterReducer = (state, action)=>{
    switch (action.type) {
        case INCREMENT:
            
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
        
        return {
            ...state,
            count: state.count - 1
        }
        case RESET:
        
        return {
            ...state,
            count: 0
        }
    
        default:
          return  state;
    }
}

export default counterReducer;