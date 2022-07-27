import { FaLink, FaEye, FaStar, FaUtensils, FaInfo } from "react-icons/fa";

const RepoItem = (props) => {

    return (
        <div className="mb-2 rounded-md card bg-base-200 hover:bg-base-300">
            <div className="card-body">
                <h3 className="mb-2 text-xl font-semibold">
                    <a href={props.data.html_url} target="_blank">
                        <FaLink className="inline mr-2"/>{props.data.name}
                    </a>
                </h3>
                <p className="mb-3">{props.data.description}</p>
                <div>
                    <div className="mr-2 badge badge-info badge-lg badge-outline">
                        <FaEye className="mr-2"/>{props.data.watchers_count}
                    </div>
                    <div className='mr-2 badge badge-success badge-lg badge-outline'>
                        <FaStar className='mr-2' /> {props.data.stargazers_count}
                    </div>
                    <div className='mr-2 badge badge-error badge-lg badge-outline'>
                        <FaInfo className='mr-2' /> {props.data.open_issues}
                    </div>
                    <div className='mr-2 badge badge-warning badge-lg badge-outline'>
                        <FaUtensils className='mr-2' /> {props.data.forks}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RepoItem;