<template  lang="pug">
  swiper(class="swiper h-80-vh" :options="swiperOption").rounded-lg.border-16.border-gray-900
    swiper-slide
      .bg-no-repeat.bg-top.bg-contain(class='h-80-vh' :style="{ backgroundImage: `url(${appMyTrajectoriesViewBackgroundUrl})` }")
    swiper-slide
      .bg-no-repeat.bg-top.bg-contain(class='h-80-vh' :style="{ backgroundImage: `url(${appMyCoursesViewBackgroundUrl})` }")
    swiper-slide
      .bg-no-repeat.bg-top.bg-contain(class='h-80-vh' :style="{ backgroundImage: `url(${appMyOnboardingViewBackgroundUrl})` }")
    div(class="swiper-pagination" slot="pagination")
</template>

<script>
  import appMyTrajectoriesViewBackgroundUrl from "../assets/img/my-trajectories-view.svg";
  import appMyCoursesViewBackgroundUrl from "../assets/img/my-courses-view.svg";
  import appMyOnboardingViewBackgroundUrl from "../assets/img/my-onboarding-view.svg";
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

  export default {
    name: 'swiper-example-mousewheel-control',
    title: 'Mousewheel control',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        appMyTrajectoriesViewBackgroundUrl,
        appMyCoursesViewBackgroundUrl,
        appMyOnboardingViewBackgroundUrl,
        swiperOption: {
          autoHeight: true,
          direction: 'horizontal',
          slidesPerView: 1,
          spaceBetween: 0,
          speed: 500,
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
        }
      }
    }
  }
</script>

<style lang="css" scoped>
  .swiper-pagination-bullet-active {
    background: #5566FA !important;
  }
</style>
