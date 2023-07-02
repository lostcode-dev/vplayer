import Swiper from "./Swiper.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { SwiperSlide } from 'swiper/vue'
import {ref} from 'vue'

const meta = {
  component : Swiper,
} satisfies Meta<typeof Swiper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: {Swiper, SwiperSlide},    
    setup() {
      const leadingBrandsData = ref([
        {
          href: ' src/assets/logo1.png ',
          name: ' img1 '
        },
        {
          href: ' src/assets/logo2.png ',
          name: ' img2 '
        },
        {
          href: ' src/assets/logo3.jpg ',
          name: ' img3 '
        },
        {
          href: ' src/assets/logo4.jpg ',
          name: ' img4 '
        },
        {
          href: ' src/assets/logo5.jpg',
          name: ' img5 '
        },
        {
          href: ' src/assets/logo6.png ',
          name: ' img6 '
        }
      ])
      return {args, leadingBrandsData};
    },
    template: '<Swiper v-bind="args"><SwiperSlide v-for="(item, index) in leadingBrandsData" :key="index"><img :src="item.href" :alt="item.name" class="bg-emerald-50 w-32 h-32 m-auto object-cover rounded-xl" /></SwiperSlide></Swiper>',
  }),
};