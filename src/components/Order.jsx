import {motion} from "framer-motion"
import {useEffect} from "react";

const Order = ({pizza, setShowModal}) => {
    useEffect(() => {
        setTimeout(() => {
            setShowModal(true)
        }, 5000)
    }, [setShowModal]);

    const containerVariant = {
        hidden: {
            opacity: 0,
            x: '100vw'
        },

        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                mass: 0.4,
                damping: 8,
                when: "beforeChildren",
                staggerChildren: 0.7
            }
        }
    }

    const childVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1
        }
    }
    return (
        <motion.div className="container order"
                    variants={containerVariant}
                    initial="hidden"
                    animate="visible"
        >

            <h2>Thank you for your order :)</h2>
            <motion.div variants={childVariant}>
                <p>You ordered a {pizza.base} pizza with:</p>
                {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
            </motion.div>

        </motion.div>
    )
}

export default Order;