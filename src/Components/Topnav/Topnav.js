import "./Topnav.css";
const Topnav = () => {
	return (
		<div className="topnav">
			<div className="topnavLeft">
				<i className=" topnavIcon fab fa-facebook-f"></i>
				<i className=" topnavIcon fab fa-instagram"></i>
				<i className=" topnavIcon fab fa-google"></i>
				<i className=" topnavIcon fab fa-twitter"></i>
			</div>
			<div className="topnavMiddle">
				<ul className="topList">
					<li className="topListItems">Home</li>
					<li className="topListItems">About</li>
					<li className="topListItems">Contact</li>
					<li className="topListItems">Write</li>
					<li className="topListItems">Logout</li>
				</ul>
			</div>
			<div className="topnavRight">
				<img
					src="https://www.clipartmax.com/png/middle/257-2572603_user-man-social-avatar-profile-icon-man-avatar-in-circle.png"
					alt="avatar"
					className="topnavAvatar"
				/>
				<i className=" topnavSearchIcon fas fa-search"></i>
			</div>
		</div>
	);
};

export default Topnav;
