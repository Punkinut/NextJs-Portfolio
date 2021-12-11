import React from 'react';
import Button from '.';

export default {
    title: 'Atoms/Buttons',
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const RedButton= Template.bind({});

RedButton.args = {
    value: 'Simple Button',
};
