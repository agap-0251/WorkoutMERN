import {useState} from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import "../index.css"

const WorkoutForm = () => {
    const {dispatch} = useWorkoutsContext()
    const {user} = useAuthContext()
    const [title,setTitle] = useState('')
    const [reps,setReps] = useState('')
    const [load,setLoad] = useState('')
    const [err,setErr] = useState('')
    const [emptyFields,setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!user) {
            setErr('You must be logged in.')
            return
        }

        const workout = {title,load,reps}

        const res = await fetch('/api/workouts',{
            method : 'POST',
            body : JSON.stringify(workout),
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${user.token}`
            }
        })
        const json = await res.json()
        if(!res.ok) {
            setErr(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(res.ok) {
            setErr(null)
            setTitle('')
            setReps('')
            setLoad('')
            setEmptyFields([])
            dispatch({type : 'CREATE_WORKOUT',payload : json})
        }


    }
  return (
    <form className="create" onSubmit={handleSubmit} >
        <h3>Add a New Workout</h3>
        <label htmlFor="">Exercise Title: </label>
        <input type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={emptyFields.includes('title')?'error-msg':''}
        />

        <label htmlFor="">Load (in kg): </label>
        <input type="number"
            onChange={(e) => setLoad(e.target.value)}
            value={load}
            className={emptyFields.includes('load')?'error-msg':''}
        />

        <label htmlFor="">Reps: </label>
        <input type="number"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
            className={emptyFields.includes('reps')?'error-msg':''}
        />
        <button>Add a Exercise</button>
        {err && <div className='error'>{err}</div>}
    </form>
  )
}

export default WorkoutForm