import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(gsap);
  nuxtApp.provide('gsap', gsap);
  // nuxtApp.provide('ScrollTrigger', ScrollTrigger);
});

// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// export default defineNuxtPlugin(() => {
//   gsap.registerPlugin(ScrollTrigger)

//   return {
//     provide: {
//       gsap
//     }
//   }
// })
