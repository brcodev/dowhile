import CategoriesHeader from "components/blog/CategoriesHeader";
import BlogList from "components/blog/search/BlogList";
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { Connect, connect } from "react-redux";
import { useParams } from "react-router-dom";
import { get_blog_list, get_blog_list_page, get_blog_list_category, get_blog_list_category_page } from "redux/action/blog/blog";
import { get_categories } from "redux/action/categories/categories";


function Category({
    get_categories,
    categories,
    get_blog_list_category,
    get_blog_list_category_page,
    posts,
    count,
    next,
    previous
}) {
    const params = useParams()
    const slug = params.slug

    useEffect(() => {
        window.scrollTo(0, 0)
        get_categories()
        get_blog_list_category(slug)
        get_blog_list_category_page(slug)
    }, [])

    return (
        <Layout>
            <Helmet>
                <title>doWhile | Categorias</title>
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
                <CategoriesHeader categories={categories && categories} />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                    <div className="mx-auto max-w-6xl my-10">
                        {/* Content goes here */}
                        <BlogList posts={posts && posts} get_blog_list_page={get_blog_list_category_page} term={slug} category={true} count={count && count} />
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

const mapStateToProps = state => ({

    categories: state.categories.categories,
    posts: state.blog.blog_list_category,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,

})
export default connect(mapStateToProps, {
    get_categories,
    get_blog_list_category,
    get_blog_list_category_page

})(Category)