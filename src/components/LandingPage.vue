<template lang="pug">
  .w-full.overflow-x-hidden.min-h-300.bg-no-repeat.bg-top.relative(:style="{ backgroundImage: `url(${heroPatternBackgroundUrl})` }")
    header.flex.justify-between.mx-24
      div
        p.text-purple-500.font-semibold.text-3xl.mt-4 Journey
          img.ml-6.-mt-5(src="../assets/img/scribbbles/logo.svg")
      a.mt-6.text-gray-500(
        class='hover:text-purple-500 underline'
        target="_blank"
        href="https://www.notion.so/thomassohet/Journey-The-onboarding-formation-Saas-a3459a053765408eb9cda1192d50e616"
      ) More information...
    main.w-full
      #hero.flex.mt-2
        div(class='w-1/4')
        div.justify-items-center(class='w-1/2')
          h1.font-headline.text-4xl.tracking-tight.text-center Rock your employee’s onboarding and training journey
          img.absolute.-ml-6.-mt-2(src="../assets/img/scribbbles/arrow-green.svg")
          p.m-4.text-center.text-xl.text-gray-500 Stop repeating the same information to every new employee
          form.flex.mt-6.ml-4.justify-center.items-center.w-full(@mouseover="buttonHover = true" @mouseleave="buttonHover = false")
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
              img.ml-42.-mt-4(src="../assets/img/scribbbles/button-wiggle-down.svg" :class='wiggleClass2')
        div(class='w-1/4')

      #app.flex.justify-center.items-center.mt-12
        swiper-app-previews(class='w-3/4')
      img.absolute.right-0.mt-4(src="../assets/img/scribbbles/wiggle-purple.svg")
      img.absolute.left-80.mt-8(src="../assets/img/scribbbles/loop-arrow-green.svg")
      .flex.justify-center.items-center
        .bg-gray-700.rounded-lg(class='w-9/10 h-6')

      #commercial-arguments.mt-40.mx-16
        .flex
          div.mt-12(class='w-1/2')
            h2.font-headline.text-3xl.tracking-tight.text-left Structure your knowledge into
              span.text-green-500  internal courses
            p.text-gray-700.text-lg.mt-4 Only one knowledge base for everything: Frequently asked questions, courses, internal wiki, ... Stupidly easy to create and to maintain.
            p.text-gray-700.text-lg Every formation you give is the opportunity to improve the knowledge base and to improve the structure of your training. Next time, the course is ready for any newcomers to follow and learn ✌️→👃
            img.absolute.left-140.hidden(src="../assets/img/scribbbles/arrow-purple.svg" class='lg:block')
          div(class='w-1/2')
            img.float-right(class='w-10/12' src="../assets/img/previews/available-courses.jpg")


        .flex.mt-16
          div(class='w-1/2')
            img.float-left(class='w-10/12' src="../assets/img/previews/learning-trajectories.jpg")
          div.mt-12(class='w-1/2')
            h2.font-headline.text-3xl.tracking-tight.text-left
              span As an employee plan with your manager some
              span.text-green-500  learning trajectories
            p.text-gray-700.text-lg.mt-4 You are as good as the training you get. The better you learn, the better you perform.
            p.text-gray-700.text-lg Organise some learning trajectories as goals to reach to apply for specific positions in the company.

    footer.absolute.bottom-0.w-full.h-18.bg-gray-900
      p.text-gray-100.text-center.m-2.text-sm
        span This project is still under construction. If you're particularly interested and think you can help, drop me an <a class='underline' href='mailto: sohet.thomas@gmail.com'>email</a>.
      p.text-gray-100.text-center.m-2.text-sm With ❤ from Belgium
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
    },
    wiggleClass2 () {
      return this.buttonHover ? 'wiggle-2' : '';
    },
  }
};
</script>

<style lang="css" scoped>
  .wiggle {
    animation: shake 1.2s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
  }
  .wiggle-2 {
    animation: shake 1.6s cubic-bezier(.36,.07,.19,.97) both;
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


