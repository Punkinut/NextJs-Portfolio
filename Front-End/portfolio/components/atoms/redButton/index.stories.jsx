import React from 'react';
import RedButton from '.';

export default {
    title: 'Atoms/Buttons',
    component: RedButton,
};

const Template = (args) => <RedButton {...args} />;

export const Button = Template.bind({});

Button.args = {
    value: 'Simple Button',
};
