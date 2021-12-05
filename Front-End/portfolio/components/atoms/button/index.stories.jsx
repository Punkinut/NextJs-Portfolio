import React from 'react';
import Button from '.';

export default {
    title: 'Atoms/Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const SimpleButton = Template.bind({});

SimpleButton.args = {
    value: 'Simple Button',
};
