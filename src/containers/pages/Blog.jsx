import BlogList from "components/blog/BlogList";
import CategoriesHeader from "components/blog/CategoriesHeader";
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { Connect, connect } from "react-redux";
import { get_blog_list, get_blog_list_page } from "redux/action/blog/blog";
import { get_categories } from "redux/action/categories/categories";
import logo from 'assets/img/logo.png'


function Blog({
    get_categories,
    categories,
    get_blog_list,
    get_blog_list_page,
    posts,
    count,
    next,
    previous
}) {
    useEffect(() => {
        window.scrollTo(0, 0)
        get_categories()
        get_blog_list()
        get_blog_list_page()
    }, [])

    return (
        <Layout>
            <Helmet>
                <title>doWhile | Blog</title>
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
                <meta property="og:url" content="https://www.dowhile.pro/blog" />
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
            <div className="pt-24">
                <CategoriesHeader categories={categories} />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                    <div className="mx-auto max-w-6xl my-10">
                        {/* Content goes here */}
                        <BlogList posts={posts && posts} get_blog_list_page={get_blog_list_page} count={count && count} />
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}


const mapStateToProps = state => ({
    //Accedemos a la variable
    categories: state.categories.categories,
    posts: state.blog.blog_list,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,

})
export default connect(mapStateToProps, {
    get_categories,
    get_blog_list,
    get_blog_list_page
})(Blog)