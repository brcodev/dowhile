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

function Ecommerce2(){


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
                        <CardSection/>
                        <WhitDesc/>
                        
                        <div className="">
                        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="block">Ready to dive in?</span>
                            <span className="block text-orange-500">Start your free trial today.</span>
                            </h2>
                            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                            <div className="inline-flex rounded-md shadow">
                                <a
                                href="#"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-button px-5 py-3 text-base font-medium text-white hover:bg-orange-700"
                                >
                                Get started
                                </a>
                            </div>
                            <div className="ml-3 inline-flex rounded-md shadow">
                                <a
                                href="#"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-orange-button hover:bg-indigo-50"
                                >
                                Learn more
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </Layout>
    )
}

export default Ecommerce2