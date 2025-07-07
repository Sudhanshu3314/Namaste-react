import React from "react";
import { useRouteError } from "react-router";

const ErrorPage = () => {
	let err = useRouteError();
    console.log(err)
	return (
		<div style={{textAlign:"center"}}>
			<h1 style={{color:"blue"}}>Oops !! Something went wrong.</h1>
			<h2 style={{color:"red"}}>
                {err.status} : {err.statusText}
            </h2>
			{/* <h2 style={{color:"green"}}>
                Message : {err.error.message}
            </h2> */}
		</div>
	);
};

export default ErrorPage;
