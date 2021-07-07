import classes from './input.module.css'

const Input = props => (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input id={props.input.id} {...props.input} />
    </div>
)

export default Input