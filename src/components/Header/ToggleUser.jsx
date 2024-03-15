import { useContext } from 'react'
import {UserContext} from '../../context/User'

const ToggleUser = () => {
    const { user, setUser } = useContext(UserContext)
    
    return (
        <div className="toggle-user">
            {user ? <button onClick={() => setUser(null)}>Logout</button> : <button onClick={() => setUser('weegembump')}>Login</button>}
        </div>
    )
}

export default ToggleUser

