import { useRouteError ,Link} from "react-router-dom";// import useRouteError for routing error

import errorImage from "../../public/Images/errorImage.jpg";

const Error = () =>{
     // call useRouteError so we can access error data while routing
    const error = useRouteError();
    console.log(error);
    return (
       <div className="error-page">
        <img src={errorImage} alt="Error Image"/>
        <h1>Ooops! The restaurant you're looking for can't be found.</h1>
        <h3 className="error-data">{error.data}</h3>
        <h3 className="error-back-home">
            <Link to="/home">Back Home</Link>
        </h3>
       </div>
    );
};

export default Error;