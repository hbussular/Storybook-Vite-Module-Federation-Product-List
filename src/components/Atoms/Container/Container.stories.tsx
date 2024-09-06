import type { Meta, StoryObj } from '@storybook/react';

import Container from './Container';
import Text from '../Text/Text';

const meta: Meta<typeof Container> = {
  component: Container,
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Primary: Story = {
  args: {
    children: <Text>It is a sample!</Text>
  },
};