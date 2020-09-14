import React from 'react'
import classes from './style.module.css'

import Backdrop from '../Backdrop'
import Aux from '../../../hoc/Aux'


const Modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className={classes.Modal}
            style={{
                transform: props.show ? 'traslateY(0)' : 'traslateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
        >
            {props.children}
        </div>
    </Aux>
)

export default Modal