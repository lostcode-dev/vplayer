<template>
  <section class="w-full bg-emerald-50 pt-8 pb-20 mt-20 sm:mt-28 md:mt-36 mx-[auto] px-4">
    <div class="max-w-5xl mx-[auto] pt-3">
      <h1 class="text-center mb-3 font-bold text-3xl">
        Todas Essas Pessoas Já Estão Utilizando Nosso Produto
      </h1>
      <p class="text-center font-semibold text-xl mb-10">
        O único player do mercado que lhe dá liberdade. E aqui está a prova:
      </p>

      <c-swiper
        :breakpoints="{
          320: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          }
        }"
      >
        <swiper-slide v-for="(item, index) in curtomersReviews" :key="index">
          <div class="bg-white p-4 rounded-xl drop-shadow-lg m-1 mx-10 sm:mx-[auto]">
            <h5 class="text-center font-bold mb-4 text-lg">{{ item.resume }}</h5>
            <p class="text-center font-semibold">{{ item.review }}</p>
            <div class="mt-2 flex items-center justify-center">
              <img
                class="bg-white rounded-full mr-4"
                width="60"
                height="60"
                :src="item.image"
                alt=""
              />
              <div>
                <p class="font-bold">{{ item.name }}</p>
                <p class="font-semibold">{{ item.enterprise }}</p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </c-swiper>
    </div>
  </section>
</template>

<script lang="ts">
import { SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

export default {
  components: {
    SwiperSlide
  },
  setup() {
    const curtomersReviews = ref([
      {
        resume: 'Curabitur tincidunt cursus tortor sit amet placerat. ',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus maximus urna quis consequat. Aenean posuere imperdiet ipsum, in finibus sapien porttitor lobortis. Vestibulum laoreet blandit scelerisque. Morbi aliquet dolor sit amet purus cursus lobortis. Duis at orci turpis.',
        image:
          'https://lh3.googleusercontent.com/mriGZCG4pRYK3LIjONSxpSlhZZtT0rbylBJTbmatbMUQb_OIiCHLejSD4OB-gJ_0rYN318B6UQP5FAsuLkNRRh0Ip482M4tj3RB8O9PXGBDgp-rMEEtW0I2YbZzfwcgBE-H3E_0-leFYlQgbLF6WPTuKuiMJih2aNJdks5V5YJcZvR0pqaEBTfSsyhOetWDYn2w77LeF4mJTsBlhfaZTb2qOpr9IX2h6gvTKnYK3toYXvc3zMlls_gD7-s6YlprgjssCU6ZJg_1FxJqZDqEUmAdM7gTGOFR_UVpUGCRYocCvkvFiRROa_jW-GPCZzHCOuXGRJnZTRydI0QLkEQvwN0RGPkWzDhMUZ4b1IQgJEv156qFrZu_MhtdPCnsbmj6WK0KNVI1jbt9ftMoWlhde4tmxF1jIvnN0upZJO0ln8iJFbRirta3RBT3tq5qEMnakcT3I8J3YcpNRIp68tWTCcrbKsRt_Dl56E7JThUBsLw4zoyjzC3khViCH7Fx5W8Os-iGqb3iOCoQWSyhaJ0NNfvMK2Z6qw4PyUFAVRzFw1KiE064_j6guVUm-oJcx3DspdHZtJPm4NSlQfEhbc9iNVuGMVR0WTSyZik6wpSdUeVKG64ygAdWx5zjJz83iBtl5ukIoTw5Wi0LvKMPOK_dUrBff6U_raAIh8dWi4gw7hp5s2RjkDoXvNQhxuaVLZz1sQmreLpO7K2aCdUPLMpqS27oxeA=s333-no?authuser=0',
        name: 'Tomás Silva',
        enterprise: 'PLR Powerhouse Strategies'
      },
      {
        resume: 'Etiam ullamcorper nunc justo.',
        review:
          'Duis volutpat at ipsum ut posuere. Suspendisse potenti. Suspendisse iaculis eros eu urna placerat, quis finibus nulla bibendum. Pellentesque vel justo nec ligula posuere vehicula. Morbi lacinia risus tortor, at placerat orci volutpat ac. Mauris et porta augue.',
        image:
          'https://lh3.googleusercontent.com/sIxGbwjbG4NUsSs2CDyuyZPV5EAaFRWa1npdzaSYh92WG-G_8VGGdUKwfNJheml5tCthP1n67ILzoNX0dI2mPN5ljoUD9fp4Eo1XCXGe96bPpUMumQSmg81Fcp10gAHJeZUhqqyUmmNG1G0b_jhEuIIR20EC15t_sPOKclkjRNFq-kS1FxMaJiv_p_xHbD1Pj6XzUDn6lawtgz8W7pT8AGqkiydHw9yXO1Z2kLTbqZivUjIupxJKWQoDPxERcPTdnczyUZR5l-26_C4mh25kNGoQNg6OV9rrqMvsjVs1Q1t5F19EQHpeEW-mCecdSrLQsv4UFF1RcNJzK4wB43HIyp6BYvp35AsgP-YZs6-5_T5qrE5yKi0s0zf8QyinYNoDFJU38JWcy4TTOGzQ_WDbs39i3for4etgBM-mfj0-PcfAHQu8nC_awbI5a4WcJJZHnlIg8MtbSaba1ZArni94Dj-ZjhaXVUfNq1kSx-TzBqjqEUXI-KRTbe4ARP49rK9KzHCNlhjegD7CdJCr4VYjJTGd5Kvihe5wBHW-mBmQdM5arX5aCGEhk5yUT96G5otbcWMWjX4WmEdqV2dLPqG56fShRklo9qi3WX3rEDdpbYU83QQC-ta3OK5r-zMTB01ekUJoARp2ZaF2UQ52tsFyvB5U-D6wn6Xx0JkmOuTuXAbORe5XIa1i8MWM8mG1DFE3JI9MMr6gJEMIyXIfKe4XHN4pCg=s336-no?authuser=0',
        name: 'Anna Silva',
        enterprise: 'ProfitWave Marketing Agency'
      },
      {
        resume: 'In ultrices nibh nisi, vitae ultricies libero accumsan et.',
        review:
          'Ut pretium non nisl at imperdiet. Fusce nunc lorem, aliquam at aliquet et, laoreet ut urna. Nam finibus mollis metus, sit amet dapibus mi porttitor at. Donec vitae tellus nec neque porta efficitur. Integer massa lacus, feugiat ut quam sed, pulvinar fringilla quam. Sed rutrum vitae nibh at mollis. ',
        image:
          'https://lh3.googleusercontent.com/SeSCxGiIH0I5H4Ue3EBfWSyC4tCaOKjW9HL1jdwNCzQ72pXlCAFQZHdvgfeNT6svXaGMKptWddpfR7P0AD10YGQfGnnYPDoglqZ5jpqPxKabjGYtoO0qdX1OOhQASY8ViYGYoUF_6YJb9obH5RrhU6_c1dmfuao2789-sRnWol-9zK4cwAhpIcMkLn2fedSzM2GxixJemT6RSRA6Z09pOj-CDbImZQUGIA7xNx15grzo2D5PjoYKqvPLcA77WwHbAqGkWUnAVbFGAIJigcPsyHailmj-lncOvRl3glNXlFTzkv5UBj6laORi1Y0KPKy9aJx1JKg2SWA7p9n_yhxrtTHBZ9C80TSgNe_OcuYT6yutqGuf_2ORDnUD8Hv0caerJJooAgAQLY7CfQXMQm-gQ5Jo8eKRBslodNuls_vz-kw007lEyni8RiI4-BUSZwGCDxxl05EfMHXpXJm4B5TRShuMniDcFPh0k7NqpiUrYL-63n0sNvkL7BUoRRVjPRhI-K3a1zRUn1g7cM8BimjxXZLB71ykG-q08BErcQJ20HY9voltx8QeE9rmmaCcklohvgG1BSWeZHaWPhsM1TDfw2YkQSXQxl5urgupfbAtIM3MoZ-GHeu_nFELpIe_qAFwAA_0NjF-Hz3_ekHATQu_McENJ6CeU5lfPJFnHlaQc3ePuDirx13Vk7SCr6BHjcTrXtyrmuQ-I-2tAGAcNV9QiHQtlw=s335-no?authuser=0',
        name: 'Aline Martins',
        enterprise: 'AdVantage Media Group'
      },
      {
        resume: 'Nullam id libero sed tellus elementum pulvinar ac quis urna.',
        review:
          'Fusce mattis id justo at tristique. Integer malesuada rhoncus magna, et fringilla sapien facilisis ut. Aliquam quis aliquet erat. Maecenas et nulla a neque bibendum maximus id egestas massa.',
        image:
          'https://lh3.googleusercontent.com/KKuyDmlLB7xNNjYOudrddi70V3RC6-CPSvqeIqvTY_SJ9uM7lIYy5uCDS4gn8tgAU3DWZBfSwXliyQh8S-koNCnWQk_FJWoVpKWZ_WYCTJmi117uWr2rWqCaYjW13FbR48cR8HAHfIP2dyTolkA8JiYUKYcsSpVNpVZPwe1oF5AYJwbrko_23hTuEvZFvNdbTtDfQ7TvJ3B7CbHhANRMmGXh5cwpQR8-d5vSHYC-zkiPf4WRZiR_zdF7D0ZsPhVtH-vCCX9JXrw5vEmn0yfvsfJIxzpT9NQwiolDLMfC8w98ItPz6U2_JeHzXfZMjMQDRCsE8cxly1zYeq1fTiiNUj55gylKNyiHNNXVoHvvDUot9GxWwg8ojdm9uoU5timLRUXfnZ4MkpcTsxQYlfeFvqUEkSnWEIy1kozXQtSrfyE98xbDLgMDrVH-3i7MuX0oX8Z8XryGdaQE1P0VsvxohijGaIi96VDIwxnxHhfEm7RVRgULf67LW8IIHrwpyR_VoosepHOAxPyQQSuRSvCdTChgN028Zc6s9j2twovDDuew6zOBDWghb0E87gy_046jzMLOw6IKf9X3MQoiEUBOfRtw8WthYmvfcQG-81QsFz17td50f4TzW87f7K6OtMJJewoZ9Km1WOTVTSrxBvLUGyYo40AJO7EhUrIvD3xa2b7R_rBy2GENTTbHvqGNllDHdUuW7lCgEyOHKKDOeUhhaWSVtQ=s331-no?authuser=0',
        name: 'Douglas Cardoso',
        enterprise: 'DigitalBoost Marketing Solutions'
      },
      {
        resume: 'Nunc tempor justo ac libero volutpat elementum. ',
        review:
          'Nullam lorem urna, suscipit eget placerat eget, tempus nec magna. Pellentesque ut euismod neque. Duis scelerisque mi non odio aliquam, ut vehicula orci dictum. Ut ullamcorper sapien eu enim luctus, tempor hendrerit nibh suscipit.',
        image:
          'https://lh3.googleusercontent.com/f0BF0tBoOOkvWCUiJSCfEfl7klY-cbUAVEUA3O4TplbyX32By3tCP6OD4Jouv9Ce80JJBCqXaaDnjDxd9mTvJ-WlMPuIG992Utf6XG89RvA8e2Ux9drKCTowUxW0WoMFa0oddaIP6y9XTgD7gNcrCMxCWcHGNmydw2LiIXSlW6U0DNLn3Ix2Fw7MlON1akU74ru7c1bysLSztp8ks5fD-qhuYyKYV6YltkKN1K7veFOD_P8E8Mm6yM8EqBvsX47Cx3i-Q92tX4cAOAEm7SzIZEvL0GAuzQ590f4KxNmpUyP_27rdZN11Mde39MDwWJnwsqcYn5CKnRHVp376FYFdygDR7L4fB_v_dP_i5MQSU_uZCNxhnx2lrrKBbr27GJIwebI4Met0V8ef07FIFEz7dssOqYSZwNPDcGTmj8Z5aKagfcrIru-b7kGKFrgD6jJYKCiotckEoMGLVhEIETaasPVoFV8brbAR1i8cGMkBcmtGLMaWIlzMgmo9m5Vldg03RmDiLs39BgihfP4MNtS7x40uPkYXq66AUcS4c8zAIP1Dcm-9b3CcJe2bArDh75hP6vtKL4jIMozbhGrvhipHyj6e5WkoybqChtyoBXHXXqscXXaVhe7E7WAqCR1MZyUoP8YRjjdJ0ZHUzF750s7CHBlO1B1TCPLadLnu0oGqZkR4XwKnAyLl3w__1ymy43gVhlSDdxGrkSgFgl6jlcJx-1IE7g=s328-no?authuser=0',
        name: 'Marcos Oliveira',
        enterprise: 'TrafficPro Marketing Solutions'
      },
      {
        resume: 'Donec rutrum maximus erat, sed bibendum arcu venenatis vitae.',
        review:
          'Aenean at urna sit amet neque feugiat dignissim. Vivamus id tincidunt mi, sed imperdiet erat. Duis consequat accumsan dui, sit amet bibendum mi faucibus in. Sed quam massa, elementum id purus eget, volutpat mollis risus. Nunc non pulvinar nulla, eget dictum nunc. ',
        image:
          'https://lh3.googleusercontent.com/nbfm8p-uVCUP7tUrsZlY4wmXPZUpdvmr3GU0QE5BUBlMIUT8M7TOGrbpCI4z6yoUVwk0UBimQStiFLhMfWpCskYeTkTdtCebn4p5iIRnD80WjZ1fHpIW-28dKudid_Z4rFQrA1c0uCBlXo5TK6nV4fDi5lcoCQ-LRcamFO3SXNiPugoOCXlPCu8XJqG0r0D0-PJOAFJNCHFJbldymLDAvmD2kKMDpkR4Ri6c2-XP0v8x18eOh20bUOAENhNVDkSuYsiBKnsSTXNP7Qh_uS_CAgH4ViNxm7-ikOxRvXuPnxYwort098ogZ0-UIzfUP_f3Y4roBEqBoRHL83E34Uz4SKnV556iDwuRwJBbxx2HRHa1k25oVEtOtZjbqtz-UXwaJFXlk3PxSFOsH53yn1rRKAHbhdMy8h69WBg1GrKTKHfchpLR4DlviCzPRwWoJwtvoO4uyaxn-x6uEASw-eCbWgrTJTwDxxQyl6fG4gtX-UjipZKJN09DYSbRTFkkKPoCW5pdH4UolltL9y7wKi0uJvcRP1xwMuNJZi1o2f-D-j8XidtbxRrtjxCPi-NnQxnDMU1E0T7ikL9TaDJ3UL1uGHrA74fU9t7_5UrJuc2WbDXLL1bcgqmEgMZJN-yX6ow9CyON0nJqWl2sZFjWQ2rHkXDY3AhZeJ7-qOOI8gTzSn2yRjKvRvQrhP_ApUNmTUbMLAzDHNcspNPk6QachQhtso9Y2g=s331-no?authuser=0',
        name: 'Danilo Lima ',
        enterprise: 'ProfitMaximizer Media'
      },
      {
        resume: 'Cras velit mi, interdum non fringilla vel, scelerisque ac tellus.',
        review:
          'Sed fermentum lorem non mollis varius. Morbi porta elementum felis. Pellentesque sed neque in neque dapibus commodo. Nullam justo lectus, pharetra sit amet libero ut, tempor porta mauris.',
        image:
          'https://lh3.googleusercontent.com/yn-QdXzfYuRO4LykoQCoRFdvFRMm_cHwEKkknYXZInekDsKCX_ETrLIGwBK1hEl8xWOAhKocsHS0ObtT8fskOnuaVBGSFjbfr9IYA74GpIURwnEeylNptdgMC3tyNegRiw-WvXvt_f92_KXhhNxrRAfICeINk_genqgH1OZJ6gg0gxvto6BQ8JGl3-imNJ-oXm6EOgxjFSbDcmUKuHpzshjM81Uk6tyaYjjLEZ0QZx_CNck0l38I-4nN6axuKJfN6JG3Blzxug8BNu6D_4qRHXTdAObhPPx3ki1KTfHJM4LH_OaMuMTJh3ShlfDUbXNRA4hT925qYwjyoFQo7W_tNyjzmQPxv34yeX0OR3Y9mYZZUn8H5yboq9ewp0qrWV2rA7K6wNFKRokS_3XuWX3pguNeyuOXScXkoG6Jrj1HxZ63x81BgDRblSiQv270BdFpdil6w932Y6WpAmVsN6JLIbD9ncoeZ7TL9Pq08AY-grf3YiH69LTQz6TXP6vIywkQHFLj1CXK-PMFG0hCdlDaGomhHwIq5j7DXzgo2wInreVoY4rw2Rtx4eugVJN67UMhVfZcYDEHEAKu-Oyh1sfItLtY2tGAZokNFCsEt_3dSmj9SmS3AgXkranC6BVcMqZA7NHPXdlEMRYCYaK82um3NfIXxY-_x_EicGu97S9YTAO326nUTP6trEH5tHBAT2Q4UDHzAC7QpQCsdb08hfI1-tbpKQ=s333-no?authuser=0',
        name: 'Mariana Dias',
        enterprise: 'PLR Express Digital Marketing'
      },
      {
        resume: 'Nulla egestas eget eros non sagittis.',
        review:
          'Sed at lobortis mauris. Phasellus a velit lectus. Fusce et tellus justo. Maecenas ullamcorper eget libero id condimentum. In sit amet ante nisi. Aliquam erat volutpat. Sed vel consectetur tortor. Nunc molestie vehicula est sit amet mollis. ',
        image:
          'https://lh3.googleusercontent.com/skWWrdc0upo_zPzDfzJ7zv683T7lO-Yt9NxdfhoVNaM8l_Du9krHqlmsFxq22aLRHeKVl21jAFA9D_9yy3ajOsCgKmMCzE9SmehNPdjhU85uKhduJq00mmmMGJA7zIW3ycCiASlvKVoCYdz84IvuKWmZ6TvX05pyMZtHP5T_zFW3NJlY3JvcdP3yM3xXQUxjp2q4odh7lFwnqd7_Y4Y2CgTmPESkib_f24UV09iHOlj5xrmArR1lW7HqI4nP8fAiNozjKZ09Op6uYOYJyPmFHoKrPC7paGBZd0kXyN2DVRYIdiuq16CnplsaJrEWAsoZxurnS318CPJqVHD7vHx8M0Al3yHb5nvWjUGyKvxZiXxsmNJPyC3GC4Ne65TNEUVPX4N0TjvJoL8W1r5MAty-N_8wAdw4rlisZeYB65N4NCzCTYGmRXv5H0kbqRICMuUfUvTQThQdKJIQNqjcQibGgqATPRHT6_7H962J0YejMf4aBwrIqupF_epkbhQmtNAA6VatrokrrT3LAjhzwAmTjIaQF7XaFw3ZfQXTLDNJn3x-AxzAQhUzRRgFknRgBZoEYp6xRyscjDGOzCI6V2-4UUjmXNjguc8LyZHYkLnwpFChdiv2rZhSzZR70aysisKC_A1RBeyaB6yu44fr5QYb8swCrUWxZMFnfODostTSnX2ezHhDXdCXJfrZCpIKLDXTJA2F-xhgYgAr0k6-ixia79W8aw=s334-no?authuser=0',
        name: 'Miguel Fernandes',
        enterprise: 'VSL Mastery Marketing'
      }
    ])

    return {
      curtomersReviews
    }
  }
}
</script>