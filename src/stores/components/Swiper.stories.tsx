import Swiper from "../../components/Swiper.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import {ref} from 'vue';

const meta = {
  component : Swiper,
} satisfies Meta<typeof Swiper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: {Swiper},
    argTypes: {
      backgroundColor: { control: 'color' },
    },
    setup() {
      return {args};
    },
    template: '<Swiper v-bind="args"> Hello </Swiper>',
  }),
};