import { connect } from "react-redux";
import {motion} from 'framer-motion'
import { useEffect } from "react";

function Layout({children}){

    useEffect (() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <motion.div
        initial={{opacity: 0, transition: {duration: 0.4}}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: 0.4}}}
        
        >
            {children}
        </motion.div>
    )
}

const mapStateToProps = state => ({

})



export default connect (mapStateToProps , {

}) (Layout)
