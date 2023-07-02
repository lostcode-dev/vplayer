import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';
import { ref } from 'vue';

const meta = {
  component: Button,
  
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => ({
    components: { Button },
    argTypes: {
      backgroundColor: { control: 'color' },
    },
    setup() {
      return {args};
    },
    template: '<Button v-bind="args"> Click Here </Button>',
  }),  
};

export const StateButton: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      let activeButton = ref(1)

      const toggleButton = (button: number) => {
        activeButton.value = button
      }
  
      const isActive = (buttonNumber: number) => {
        return activeButton.value === buttonNumber
      }

      return {args, toggleButton, isActive};
    },
    template: '<Button v-bind="args" :activeButton="isActive(1)" @click="toggleButton(1)"> Nibh sagittis </span> </Button> </br> <Button v-bind="args" :activeButton="isActive(2)" @click="toggleButton(2)"> Suspendisse tortor </Button>',
  }),  
};