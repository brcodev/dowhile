import { connect } from "react-redux";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { get_blog } from "redux/action/blog/blog";
import moment from "moment";
import DOMPurify from 'dompurify'
import logo from 'assets/img/logo.png'
import { Helmet } from 'react-helmet-async';



function PostDetail({ get_blog, post }) {

    const params = useParams()
    const slug = params.slug

    useEffect(() => {
        get_blog(slug)
    }, [])

    return (
        <Layout>
            <Helmet>
                <title>doWhile | Post</title>
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
                <meta property="og:url" content={`www.dowhile.pro/${slug}`} />
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
            {
                post && post.slug === slug ?
                    <div className="pt-24">
                        <div className="">
                           
                            <div className="relative mx-auto max-w-7xl py-10 px-4 sm:py-20 sm:px-6 lg:px-8">
                                <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">{post.title}</h1>
                                <div className="min-w-0 flex-1 p-4 pt-8">
                                    <div className="">

                                        <span className=" hover:text-orange-500  mx-1 font-medium text-gray-800 text-sm "><Link to={`/category/${post.category.slug}`}>{post.category.name}</Link></span> <span className="text-gray-300">&middot;</span>
                                        <span className="mt-2 ml-2 mr-1 font-medium text-gray-800 text-sm">{moment(post.published).format('LL')}</span> <span className="text-gray-300">&middot;</span>
                                        <span className="mt-2 mx-2 font-medium text-gray-800 text-sm">{post.time_read} min read</span>
                                        <p className="mt-4 text-lg font-regular text-gray-800 leading-8">{post.description}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div className="inset-0">
                                <img
                                    className=" h-[20rem] md:h-[32rem] w-full object-cover"
                                    src={post.thumbnail}
                                    alt="Post detail dowhile.pro"
                                />
                                
                            </div>

                        <div className="relative overflow-hidden bg-white py-5 md:py-10">

                            <div className="relative px-4 sm:px-6 lg:px-8">

                                <div className="prose prose-lg max-w-6xl prose-indigo mx-auto mt-6 text-gray-500">
                                    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />


                                </div>
                            </div>
                        </div>

                    </div>
                    :
                    <>Loading</>
            }
            <Footer />
        </Layout>
    )
}


const mapStateToProps = state => ({
    post: state.blog.post

})

export default connect(mapStateToProps, {
    get_blog

})(PostDetail)