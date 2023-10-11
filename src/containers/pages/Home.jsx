import Footer from "components/navigation/Footer"
import Header from "components/Home/Header"
import Incentives from "components/Home/Incentives"
import UseCases from "components/Home/UseCases"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Features from "components/Home/Features"
import CTA from "components/Home/CTA"
import LogoCloud from "components/Home/LogoCloud"
import BlogList from "components/Home/BlogList"
import logo from 'assets/img/logo.png'
import { Helmet } from "react-helmet-async"




function Home() {
    return (
        <Layout>
            <Helmet>
                <title>doWhile | Home</title>
                <meta
                    name="description"
                    content="agencia software, marketing, web, creacion paginas, create web"
                />
                <meta name="keywords" content="agencia software, marketing, web, creacion paginas" />
                <meta name='author' content="codev" />
                <meta name='publisher' content="codev" />
                <link rel="canonicacal" href="https://www.dowhile.pro" />

                {/* Social Media Tags */}
                <meta property="og:title" content='doWhile | Software Agency' />
                <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
                <meta property="og:url" content="https://www.dowhile.pro" />
                <meta property="og:image" content={`https://www.dowhile.pro${logo}`} />

                <meta name="twitter:title" content='doWhile | Software Agency' />
                <meta
                    name="twitter:description"
                    content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
                />
                <meta name="twitter:image" content='' />
                <meta name="twitter:card" content="summary_large_image" />

            </Helmet>
            <Navbar />
            <div className="pt-28">
                <Header />
                <Incentives />
                <UseCases />
                <Features />
                <CTA />
                <LogoCloud />
                <BlogList />
            </div>
            <Footer />
        </Layout>
    )
}

export default Home