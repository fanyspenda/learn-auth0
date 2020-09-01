import React from "react";

const LoggedIn: React.FunctionComponent = () => {
	return (
		<>
			<h1>This page is only showed to Logged In User</h1>
			<a href="#">Log Out</a>
		</>
	);
};

export default LoggedIn;
