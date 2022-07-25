import { CSSProperties } from "react";
import { HashLoader } from "react-spinners";

const Spinner = () => {
    return (
        <div className="spinner"><HashLoader color={'white'} loading={true} size={100} cssOverride={CSSProperties = {display: "block",
        margin: "0 auto",
        borderColor: "red",}}/></div>
    );
}

export default Spinner;