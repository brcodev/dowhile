import LogoCloud from "components/careers/LogoCloud"
import Header from "components/careers/Header"
import Testimonial from "components/careers/Testimonial"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Features from "components/careers/Features"
import PositionsList from "components/careers/PositionsList"
import { Helmet } from 'react-helmet-async';
import logo from 'assets/img/logo.png'



function Careers() {
    return (
        <Layout>
            <Helmet>
                <title>doWhile | Carreras</title>
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
                <meta property="og:url" content="https://www.dowhile.pro/carreras" />
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
                <Testimonial />
                <LogoCloud />
                <Features />
                <PositionsList />
            </div>
            <Footer />
        </Layout>
    )
}

export default Careers