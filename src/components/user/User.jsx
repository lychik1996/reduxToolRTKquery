import { useSelector } from "react-redux"
import { useActions } from "../../hooks/useActions";


export default function User() {
    
    const {getUserById} = useActions();
    
    const { isLoading, error, user } = useSelector(state => state.users);
    
    return (
        <div>
            <button onClick={()=>getUserById(1)}>
                Get User
            </button>
            {isLoading ? <div>Loading...</div> :
                error ? <div>{error.message}</div> :
                    user?.name ? <h1>User: {user.name}</h1> :
                        <h1>USER NOT FOUND</h1>}
        </div>
    )
}