<template>
  <div class="intro-service h-screen px-8 flex flex-col justify-center">
    <h3 class="text-7xl font-bold txt">Les 4 Engrenages <br> de Notre Impact</h3>
    <p class="text-2xl my-4 leading-tight font-light txt"><span class="text-yellow-300">Génies-Club,</span> c'est l'union de quatre branches dynamiques, chacune guidée par une mission unique et complémentaire. Ensemble, elles façonnent l'avenir de l'association, renforçant son impact et propulsant ses ambitions. Chaque branche incarne un pilier essentiel, contribuant activement à l'atteinte des objectifs communs, dans un esprit de collaboration, d'innovation et de passion.</p>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue"

const { $gsap } = useNuxtApp()

onMounted(() => { 
  $gsap.set('.txt', { y: 80, opacity: 0 })

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: ".intro-service",
      start: "top top",
      end: "+=500",
      pin: true,
      scrub: true,
    },
  })

  tl
  .to(".txt", {
    y: 0, 
    ease: "power4.out",
    duration: 0.5,
    opacity: 1,
    delay: 1, 
    stagger: 0.5,
  }, 0)
})

</script>
