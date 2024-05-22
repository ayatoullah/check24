import Header from '../components/Header';
import Navigation from '../components/Navigation';
import MainContent from '../components/MainContent';
import Pagination from '../components/Pagination';
import './Home.css';

const Home = () => {
    return (
        <>  
            <Header/>
            <Navigation/>
            <MainContent/>
            <Pagination/>
        </>
    );
}
export default Home;