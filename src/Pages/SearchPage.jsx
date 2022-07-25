import Navbar from "../Layout/Navbar";
import Spinner from "../Layout/Spinner";
import { useContext } from "react";
import UserItem from "../Layout/UserItem";
import GithubContext from "../Contexts/GithubContext";
import UserSearch from "../Layout/UserSearch";
import Alert from "../Layout/Alert";

const SearchPage = () => {

    const {loading, users} = useContext(GithubContext);   
    
    if (loading === false) {
        return (
            <>
                <Navbar />
                <Alert />
                <UserSearch />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    {users.items?.map(user => {
                        return <UserItem key={user.id} user={user}/>
                    })}
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <Navbar />
                <Spinner />
            </>
        );
    }
}

export default SearchPage;