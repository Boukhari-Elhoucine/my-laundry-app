import { PrimaryButton } from 'shared/components';
import { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'Design/shared/components/Buttons',
  component: PrimaryButton
} as Meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {
    children: 'text'
  }
};
