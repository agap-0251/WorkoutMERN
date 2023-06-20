import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutsContext"

export const useLogout = () => {
    const {dispatch} = useAuthContext()
    const {dispatch : dispatchWorkouts} = useWorkoutsContext()

    const logout = () => {
        //remove user from localStorage
        localStorage.removeItem('user')
    
        //dispatch logout
          dispatch({type : 'LOGOUT'})
          dispatchWorkouts({type : 'SET_WORKOUTS',payload : null})
    }
    return {logout}

}