import CategoriesHeader from "components/blog/CategoriesHeader";
import BlogList from "components/blog/search/BlogList";
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { Connect, connect } from "react-redux";
import { useParams } from "react-router-dom";
import { search_blog, search_blog_page } from "redux/action/blog/blog";
import { get_categories } from "redux/action/categories/categories";


function Search({
    posts,
    count,
    next,
    previous,
    search_blog,
    search_blog_page,
    get_categories,
    categories,
}) {

    const params = useParams()
    const term = params.term

    useEffect(() => {
        window.scrollTo(0, 0)
        search_blog(term)
        get_categories()

    }, [])

    return (
        <Layout>
            <Helmet>
                <title>doWhile | Blog</title>
                <meta
                    name="description"
                    content="agencia software, marketing, web, creacion paginas, create web"
                />
                <meta name="keywords" content="agencia software, marketing, web, creacion paginas, blog" />
                <meta name='author' content="codev" />
                <meta name='publisher' content="codev" />
                <link rel="canonicacal" href="https://www.dowhile.pro" />

                {/* Social Media Tags */}
                <meta property="og:title" content='doWhile | Software Agency' />
                <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
                <meta property="og:url" content="" />
                <meta property="og:image" content='' />

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
                <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                    {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                    <div className="mx-auto max-w-full my-10">
                        {/* Content goes here */}
                        <BlogList posts={posts && posts} get_blog_list_page={search_blog_page} term={term} count={count && count} />
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}
const mapStateToProps = state => ({
    posts: state.blog.filtered_posts,
    categories: state.categories.categories,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,

})

export default connect(mapStateToProps, {
    search_blog,
    search_blog_page,
    get_categories
})(Search)