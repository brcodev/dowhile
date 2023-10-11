import CasesList from "components/cases/CasesList"
import Header from "components/cases/Header"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { Helmet } from 'react-helmet-async';
import logo from 'assets/img/logo.png'



function Cases() {
    return (
        <Layout>
            <Helmet>
                <title>doWhile | Casos de estudio</title>
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
                <meta property="og:url" content="https://www.dowhile.pro/casos" />
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
                <CasesList />
            </div>
            <Footer />
        </Layout>
    )
}

export default Cases