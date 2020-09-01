import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoggedOut: React.FunctionComponent = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<>
			<h1>You are not Logged In if You See This</h1>
			<button onClick={() => loginWithRedirect()}>Log In</button>
		</>
	);
};

export default LoggedOut;
