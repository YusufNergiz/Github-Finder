import { useEffect, useContext } from "react";
import GithubContext from "../Contexts/GithubContext";
import { useParams } from "react-router-dom";
import Spinner from "../Layout/Spinner";
import Navbar from "../Layout/Navbar";
import { GoLocation } from 'react-icons/go'
import { CgWebsite } from 'react-icons/cg'
import { FiTwitter } from 'react-icons/fi'
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import RepoItem from "../Layout/RepoItem";

const User = () => {

    const {getUser, getRepos, user, loading, repos} = useContext(GithubContext);

    const { login } = useParams();

    useEffect(() => {
        getUser(login)
        getRepos(login)
    }, [])

    if (loading) {
        return (
            <Spinner />
        );
    }
    else {
        return (
            <>
                <Navbar />
                <div className="mx-auto w-10/12 mt-12 flex ml-[127px]">
                    <div className="w-10/12 flex flex-row">
                        <div className="card w-96 image-full bg-base-100 float-left">
                            <figure><img src={user.avatar_url} alt={user.login} /></figure>
                            <div className="card-body justify-end">
                                <h1 className="card-title mb-0">{user.name}</h1>
                                <p className="flex-grow-0">{user.login}</p>
                            </div>
                        </div>
                        <div className="float-left m-1 mt-8 ml-12 break-words w-[730px] relative">
                            <h1 className="text-3xl card-title font-bold">{user.name}
                                <div className="badge badge-success badge-outline ml-2 mr-1">{user.type}</div>
                                {user.hireable && (
                                    <div className="badge badge-info">Hireable</div>
                                )}
                            </h1>
                            <p className="mt-4">{user.bio}</p>
                            <a href={user.html_url} target="_blank" className='btn btn-outline mt-4'>VISIT GITHUB PROFILE</a>
                            <div className="grid grid-cols-3 mt-8 gap-4">
                                {user.location && (
                                    <div className="stats shadow-md bg-base-100 w-[220px]">
                                        <div className="stat">
                                            <div className="stat-title text-md align-middle inline-block"><GoLocation className="align-middle inline-block m-1"/>Location:</div>
                                            <div className="stat-value text-lg">{user.location}</div>
                                        </div>
                                    </div>
                                )}
                                {user.blog && (
                                    <a href={`https://${user.blog}`} target='_blank'>
                                        <div className="stats shadow-md bg-base-100 w-[220px]">
                                        <div className="stat">
                                            <div className="stat-title text-md align-middle inline-block"><CgWebsite className="align-middle inline-block m-1"/>Website:</div>
                                            <div className="stat-value text-lg">{user.blog}</div>
                                        </div>
                                    </div>
                                    </a>
                                )}
                                {user.twitter_username && (
                                    <a href={`https://twitter.com/${user.twitter_username}`} target='_blank'>
                                        <div className="stats shadow-md bg-base-100 w-[220px]">
                                        <div className="stat">
                                            <div className="stat-title text-md align-middle inline-block"><FiTwitter className="align-middle inline-block m-1"/>Twitter:</div>
                                            <div className="stat-value text-lg">{user.twitter_username}</div>
                                        </div>
                                    </div>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <div className="stats shadow w-[18%] ml-[127px] mt-8">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <FaUsers size={50}/>
                        </div>
                        <div className="stat-title">Followers:</div>
                        <div className="stat-value text-primary">{user.followers}</div>
                    </div>
                </div>
                <div className="stats shadow w-[18%] ml-6 mt-8">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUserFriends size={50}/>
                        </div>
                        <div className="stat-title">Following:</div>
                        <div className="stat-value text-secondary">{user.following}</div>
                    </div>
                </div>
                <div className="stats shadow w-[18%] ml-6 mt-8">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <FaCodepen size={50}/>
                        </div>
                        <div className="stat-title">Public Repositories:</div>
                        <div className="stat-value text-primary">{user.public_repos}</div>
                    </div>
                </div>
                <div className="stats shadow w-[18%] ml-6 mt-8">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaStore size={50}/>
                        </div>
                        <div className="stat-title">Public Gists:</div>
                        <div className="stat-value text-secondary">{user.public_gists}</div>
                    </div>
                </div>
                </div>
                <div className="rounded-lg shadow-lg card bg-base-100 mt-8 w-[77%] ml-[127px]">
                    <div className="card-body">
                        <h2 className="text-3xl my-4 font-bold card-title">Latest Repositories</h2>
                        {repos.map((repo) => {
                            return <RepoItem data={repo} key={repo.id}/>
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default User;