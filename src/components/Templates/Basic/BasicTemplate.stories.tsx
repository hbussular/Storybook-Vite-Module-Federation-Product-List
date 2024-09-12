import type { Meta, StoryObj } from '@storybook/react';

import BasicTemplate from './BasicTemplate';
import Text from '../../Atoms/Text/Text';

const meta: Meta<typeof BasicTemplate> = {
  component: BasicTemplate,
};

export default meta;
type Story = StoryObj<typeof BasicTemplate>;

export const Primary: Story = {
  args: {
    children: <Text>It is a sample of template!</Text>,
  },
};