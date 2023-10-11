import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "store";
import { Provider } from "react-redux"; // Para poder usar store
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Cases from "containers/pages/Cases";
import Services from "containers/pages/Services";
import About from "containers/pages/About";
import Careers from "containers/pages/Careers";
import Blog from "containers/pages/Blog";
import Contact from "containers/pages/Contact";
import AnimatedRoutes from "Routes";


function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title> doWhile | Software Agency</title>
        <meta
          name="description"
          content="agencia software, marketing, web, creacion paginas"
        />
        <meta name="keywords" content="agencia software, marketing, web, creacion paginas" />
        <meta name='author' content="codev" />
        <meta name='publisher' content="codev" />
        <link rel="canonicacal" href="https://www.dowhile.pro" />

        {/* Social Media Tags */}
        <meta property="og:title" content='Murkiva | Software Agency' />
        <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
        <meta property="og:url" content="" />
        <meta property="og:image" content='' />

        <meta name="twitter:title" content='Murkiva | Software Agency' />
        <meta
          name="twitter:description"
          content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
        />
        <meta name="twitter:image" content='' />
        <meta name="twitter:card" content="summary_large_image" />

      </Helmet>
      <Provider store={store}>
        <Router>
          <AnimatedRoutes />
        </Router>
      </Provider>

    </HelmetProvider>

  );
}

export default App;
