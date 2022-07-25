import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex h-screen">
            <div className="m-auto grid grid-cols-1 gap-10">
                <div>
                    <div className='align-middle inline-block'><h1 className="text-9xl font-bold">Oops!</h1></div>
                </div>
                <div className='grid gap-1'>
                    <h1 className="text-5xl font-medium">404 - Page Not Found!</h1>
                </div>
                <div>
                    <Link to='/'><button className='btn btn-active btn-secondary'><FaHome className='mr-2'/><strong>Go Back</strong></button></Link>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;