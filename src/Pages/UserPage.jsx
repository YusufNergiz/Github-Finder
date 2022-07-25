import { useEffect, useContext } from "react";
import GithubContext from "../Contexts/GithubContext";
import { useParams } from "react-router-dom";

const User = () => {

    const {getUser, user} = useContext(GithubContext);

    const { login } = useParams();

    useEffect(() => {
        getUser(login)
    }, [])

    return (
        <div>
            <h1>{user.login}</h1>
            <img src={user.avatar_url} alt="User Profile" />
        </div>
    );
}

export default User;