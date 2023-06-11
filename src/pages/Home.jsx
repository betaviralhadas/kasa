import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards"
import Card from "../components/Card"
import Footer from "../components/Footer";
import '../style/pages/_Home.scss'

const Home = () => {
    return (
        <main>
            {<Banner />}
            {<Cards />}
        </main>
    );
}
export default Home;

/* importei os componentes banner, cards e footer
criei uma funcao home onde tem uma tag main e no interior chamei a funcao banner e cards para aficher as imgs
e no fim exporto a funcao home
*/