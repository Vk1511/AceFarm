import counterReducer from './features/counter.feature';
import authSlice from "./features/authSlice";

const rootReducer = {
    counter : counterReducer,
    authSlice : authSlice,
}
export default rootReducer;