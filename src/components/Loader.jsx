import {motion, useCycle} from "framer-motion"

const loaderVariant = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 0.5
            },

            y: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    },
    animationTwo: {
        y: [0, -40],
        x: 0,
        transition: {
            y: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    }
}


const Loader = () => {
    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo")
    return (
        <>
            <motion.div className="loader"
                        variants={loaderVariant}
                        animate={animation}
            >

            </motion.div>
            <div className="cycle-loader" onClick={()=> cycleAnimation()}>
                Cycle loader
            </div>
        </>
    );
};

export default Loader;
