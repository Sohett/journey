<template lang="pug">
  .w-full.overflow-x-hidden.min-h-300.bg-no-repeat.bg-top(:style="{ backgroundImage: `url(${heroPatternBackgroundUrl})` }")
    header.flex.justify-between.mx-24
      div
        p.text-purple-500.font-semibold.text-3xl.mt-4 Journey
          img.ml-6.-mt-5(src="../assets/img/scribbbles/logo.svg")
      a.mt-6(
        class='hover:text-purple-500'
        target="_blank"
        href="https://www.notion.so/thomassohet/Journey-The-onboarding-formation-Saas-a3459a053765408eb9cda1192d50e616"
      ) En savoir plus ...
    main.w-full
      #hero.flex.mt-2
        div(class='w-1/4')
        div.justify-items-center(class='w-1/2')
          h1.font-headline.text-4xl.tracking-tight.text-center Rock your employee’s onboarding and training journey
          p.m-4.text-center.text-xl Stop repeating the same information to every new employee
          form.flex.mt-6.ml-4.justify-center.items-center.w-full()
            input.p-4.text-xl.mx-3.text-gray-700.rounded-md.border.border-purple-100.shadow(
              class='focus:outline-none focus:border-purple-500 hover:border-purple-500 w-3/5'
              placeholder='Email address...'
            )
            div
              img.-ml-6.-mt-2.-mb-2(src="../assets/img/scribbbles/button-wiggle-up.svg" :class='wiggleClass')
              button.mx-3.bg-purple-500.rounded-md.px-5.py-3(
                class='focus:outline-none'
                @mouseover="buttonHover = true"
                @mouseleave="buttonHover = false"
              )
                span.text-white.text-lg.font-bold Join priority list
              img.ml-42.-mt-4(src="../assets/img/scribbbles/button-wiggle-down.svg" :class='wiggleClass')
        div(class='w-1/4')
      #app.flex.justify-center.items-center.mt-12
        swiper-app-previews(class='w-3/4')
      .flex.justify-center.items-center
        .bg-gray-700.rounded-lg(class='w-9/10 h-6')
</template>

<script>
import heroPatternBackgroundUrl from "../assets/img/hero-pattern.svg";
import SwiperAppPreviews from './SwiperAppPreviews'

export default {
  name: 'LandingPage',
  components: {
    SwiperAppPreviews,
  },
  data() {
    return {
      buttonHover: false,
      heroPatternBackgroundUrl,
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    };
  },
  computed: {
    wiggleClass () {
      return this.buttonHover ? 'wiggle' : '';
    }
  }
};
</script>

<style lang="css" scoped>
  .wiggle {
    animation: shake 1.2s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
  }

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    
    20%, 80% {
      transform: translate3d(1px, 1px, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-1px, -1px, 0);
    }

    40%, 60% {
      transform: translate3d(1px, 1px, 0);
    }
}

</style>


