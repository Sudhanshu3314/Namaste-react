import { useRouteError } from "react-router";

const Error = () => {
	let err = useRouteError();
	return (
		<div style={{textAlign:"center",fontSize:"1.4em"}}>
			<h1 style={{color:"red"}}>{err.status + " : " + err.statusText}</h1>
      {/* <h2 style={{color:"blue"}}>{ "Description : " + err.error.message }</h2> */}
		</div>
	);
};

export default Error;
