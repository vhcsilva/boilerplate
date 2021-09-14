import { Meta, Story } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Default',
    description: 'Default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

export const NotDefault: Story = (args) => <Main {...args} />
NotDefault.args = {
  title: 'Not Default',
  description: 'Not Default'
}
