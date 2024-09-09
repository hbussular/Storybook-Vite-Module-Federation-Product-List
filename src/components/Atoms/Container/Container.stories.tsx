import { Meta, StoryObj } from '@storybook/react';
import Container from './Container'; // Adjust the path if necessary
import Text from '../Text/Text';

// Storybook metadata for the Container component
const meta: Meta<typeof Container> = {
  title: 'Molecules/Container',  // Organizes this story under "Molecules" in Storybook
  component: Container,
  argTypes: {
    bgColor: { control: 'color' },  // Allows color picking in the Storybook UI
    maxWidth: { control: 'text' },
    maxHeight: { control: 'text' },
    minHeight: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

// Default story for the Container component
export const Primary: Story = {
  args: {
    bgColor: '#25e69f',
    maxWidth: '50vw',
    maxHeight: '100vh',
    minHeight: '50vh',
    children: <Text>This is sample content inside the container</Text>,  // Text content to render inside
  },
};
