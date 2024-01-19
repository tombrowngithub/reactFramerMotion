import {Link} from "react-router-dom"
import {motion, AnimatePresence} from "framer-motion";

const Modal = ({showModal, setShowModal}) => {

    const backdrop = {
        visible: {
            opacity: 1
        },
        hidden: {opacity: 0}
    }

    const modalVariant = {
        hidden: {
            y: '-100vh',
            opacity: 0
        },
        visible: {
            y: '200px',
            opacity: 1,
            transition: {
                delay: 0.3,
            }
        }
    }
    return (
        <AnimatePresence mode='wait'>
            {showModal &&
                <motion.div className="backdrop"
                            variants={backdrop}
                            initial="hidden"
                            animate="visible"
                >
                    <motion.div className="modal"
                                variants={modalVariant}
                    >
                        <p>Want to make another pizza</p>
                        <Link to='/'>
                            <button>Start again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    );
};

export default Modal;
