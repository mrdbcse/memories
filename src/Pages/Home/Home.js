import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import Sidenav from "../../Components/Sidenav/Sidenav";
import "./Home.css";
const Home = () => {
	return (
		<>
			<Header />
			<div className="home">
				<Posts />
				<Sidenav />
			</div>
		</>
	);
};

export default Home;
