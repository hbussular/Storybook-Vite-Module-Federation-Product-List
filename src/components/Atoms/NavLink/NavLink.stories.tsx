import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom'; // Needed to simulate the router environment
import NavLink from './NavLink';

const meta: Meta<typeof NavLink> = {
  title: 'Atoms/NavLink',  // Organize this story under "Atoms" in Storybook
  component: NavLink,
  argTypes: {
    linkPath: { control: 'text' }, // Enable text input for the link path
    children: { control: 'text' }, // Enable text input for children
  },
};

export default meta;
type Story = StoryObj<typeof NavLink>;

// Primary story for NavLink
export const Primary: Story = {
  args: {
    linkPath: '/home', // Default link path
    children: 'Go to Home', // Default link text
  },
  render: (args) => (
    <BrowserRouter>
      <NavLink {...args} />
    </BrowserRouter>
  ),
};
