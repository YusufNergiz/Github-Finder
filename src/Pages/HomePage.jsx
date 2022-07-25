import { FaGithub, FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import GithubContext from '../Contexts/GithubContext';

const HomePage = () => {

    const currentYear = new Date().getFullYear();

    const {loginCurrentUser} = useContext(GithubContext);

    let navigate = useNavigate();

    const SearchPage = () => {
        navigate("/search");
    }

    return (
        <div className="flex h-screen">
            <Link to='/search'><div className="fixed bottom-10 right-10 cursor-pointer hover:text-[#A10035]"><FaSearch size={30}/></div></Link>
            <div className="m-auto grid grid-cols-1 gap-10">
                <div className='text-center'>
                    <div className='align-middle inline-block text-8xl font-bold mr-3'><FaGithub /></div>
                    <div className='align-middle inline-block'><h1 className="text-8xl font-bold">Github Finder</h1></div>
                </div>
                <div className='grid gap-1'>
                    <h1 className="text-lg font-semibold">Find A Github User and Check out their Profile!</h1>
                    <h1 className="text-lg font-semibold">Created By -- Yussuf Nergiz</h1>
                    <h1 className="text-lg font-light italic">{`All Rights Reserved © ${currentYear}`}</h1>
                    <div><div className='align-middle inline-block'><input type="text" className='w-40 text-black placeholder:text-gray-500' placeholder='Enter Your Name' id='currentUserInput'/></div><div className='align-middle inline-block m-2'><Link to='/search'><button className={'btn btn-outline btn-sm'} onClick={() => {loginCurrentUser(); SearchPage();}}>Submit</button></Link></div></div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;