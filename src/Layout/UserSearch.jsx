import { useState, useContext } from 'react';
import GithubContext from '../Contexts/GithubContext';
import AlertContext from '../Contexts/AlertContext';

const UserSearch = () => {

    const [input, setInput] = useState('');

    const {searchUsers, users, clearUsers} = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext);

    const handleChage = (event) => {
        setInput(event.target.value);
    }

    const handleClick = (event) => {
        event.preventDefault();

        if (input === '') {
            setAlert('Please Enter Something', 'error');
        }

        searchUsers(input);
        setInput('');
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mt-8 ml-40">
            <div>
                <form>
                    <div className="form-control">
                        <div className="relative">
                            <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" placeholder="Search" onChange={handleChage} value={input}/>
                            <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg" type="submit" onClick={handleClick}>Go</button>
                        </div>
                    </div>
                </form>
            </div>
            {users.items?.length > 0 && (
                <div>
                    <button className="btn btn-ghost btn-lg" onClick={clearUsers}>Clear</button>
                </div>
            )}
        </div>
    );
}

export default UserSearch;