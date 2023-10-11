import Header from "components/cases/ecommerce2/Header"
import ImgGrid from "components/cases/ecommerce/ImgGrid"
import ProblemDefinition from "components/cases/ecommerce/ProblemDefinition"
import Solution from "components/cases/ecommerce/Solution"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import CardSection from "components/cases/ecommerce2/CardSection"
import WhitDesc from "components/cases/ecommerce2/WhitDesc"
import Features from "components/cases/ecommerce3/Features"
import SectionTwo from "components/cases/ecommerce3/SectionTwo"

function Ecommerce3(){


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
                        <Features/>
                        <SectionTwo/>
                        {/*<ImgGrid/>*/}
                        <div className="">
                        
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </Layout>
    )
}

export default Ecommerce3