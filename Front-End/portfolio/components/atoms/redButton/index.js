import { FunctionComponent } from 'react';
import buttonStyle from '../../../styles/atoms/button.module.scss';

const Button = ({ value }) => {
    return <button className={buttonStyle.button}>{value}</button>;
};

export default Button;
