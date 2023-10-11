import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Contact from "components/Contact";
import { useEffect } from "react";
import Team from "components/services/training/Team";
import Header from "components/services/training/Header";
import Cards from "components/services/training/Cards";
import LogoCloud from "components/services/training/LogoCloud";
import CTA from "components/services/training/CTA";


function Training(){

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <Layout>
        <Navbar/>
        <div className="pt-28">
            <div className="mx-auto max-w-1700 px-4 sm:px-6 lg:px-8">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="mx-auto max-w-1700">
                    {/* Content goes here */}
                    
                    <Header/>
                    <Team/>
                    <Cards/>
                    <LogoCloud/>
                    <CTA/>
                </div>
            </div>
        </div>
        <Footer/>
    </Layout>
    )
}

export default Training