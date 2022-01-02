import "./Header.css";
const Header = () => {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">React &amp; Node</span>
				<span className="headerTitleLg">memories</span>
			</div>
			<img
				src="https://images.unsplash.com/photo-1641113994135-a9f230b1f9b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
				alt="headerImage"
				className="headerImage"
			/>
		</div>
	);
};

export default Header;
