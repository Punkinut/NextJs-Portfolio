import { FunctionComponent } from 'react';
import buttonStyle from '../../../styles/atoms/Button.module.css';

const Button = ({ value }) => {
    return <button className={buttonStyle.button}>{value}</button>;
};

export default Button;