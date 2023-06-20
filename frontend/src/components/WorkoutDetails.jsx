import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import {formatDistanceToNow} from 'date-fns'
import "../index.css"

const WorkoutDetails = ({workout}) => {
  const {dispatch} = useWorkoutsContext()
  const {user} = useAuthContext()

  const handleDelete = async () => {

    if(!user) {
      return
    }

    const res = await fetch('/api/workouts/' + workout._id, {
      method : 'DELETE',
      headers : {
        'Authorization' : `Bearer ${user.token}`
      }
    })
    const json = await res.json()
    if(res.ok) {
      dispatch({type : 'DELETE_WORKOUT',payload : json})
    }
  }

  return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
        <button onClick={handleDelete}>delete</button>
    </div>
  )
}

export default WorkoutDetails