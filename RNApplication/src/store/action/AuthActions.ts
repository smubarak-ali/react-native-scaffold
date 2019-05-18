import { User } from "../../utils/objects/user/User";
import { DispatchAction } from "../../utils/objects/shared/ReducModel";

export class AuthActions {

    static ADD_TOKEN = "add_token";
    static ADD_ROLES = "add_roles";
    static SIGNOUT = "signout";

    static loginAction = (data: User) => {
        const obj: DispatchAction =  {
            type: AuthActions.ADD_TOKEN,
            payload: data
        }
        return obj;
    }

    static addRolesAction = (roles: Array<string>) => {
        const obj: DispatchAction = {
            type: AuthActions.ADD_ROLES,
            payload: roles
        }
        return obj;
    }

    static signoutAction = () => {
        const obj: DispatchAction = {
            type: AuthActions.SIGNOUT
        }
        return obj;
    }
}