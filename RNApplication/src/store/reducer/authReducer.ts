import { User } from "../../utils/objects/user/User";
import { AuthActions } from "../action/AuthActions";
import { DispatchAction } from "../../utils/objects/shared/ReducModel";

export const authReducerInitialState: User = {
    email: "",
    accessToken: undefined,
    roles: undefined
}

export default function authReducer(state = authReducerInitialState, action: DispatchAction) {
    /* 
        Choose either the spread operator or Object.assign and stick with either one of them
        My recommendation is to go for the spread operator
    */
    switch (action.type) {
        case AuthActions.ADD_TOKEN: {
            return {
                ...state,
                email: action.payload.email,
                accessToken: action.payload.accessToken,
            } as User;
        }
        case AuthActions.ADD_ROLES: {
            return Object.assign({}, <User>{
                email: state.email,
                accessToken: state.accessToken,
                roles: action.payload
            });
        }
        case AuthActions.SIGNOUT: {
            return Object.assign({}, <User>{
                email: "",
                accessToken: undefined,
                roles: undefined
            });
        }
        default:
            return state;
    }
}
