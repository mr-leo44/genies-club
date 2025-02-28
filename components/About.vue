<template>
  <div class="relative h-screen w-full overflow-hidden card">
    <div class="absolute inset-0 z-2 h-full w-full bg-black opacity-0 overlay"></div>
    <div class="flex flex-col space-y-4 left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] z-12 text-white absolute texts">
      <h4 class="font-bold text-6xl">Un Laboratoire</h4>
      <p class="max-w-8xl">
        Créée à Kinshasa le 9 janvier 2010, GC est une association qui est basée sur la création, l'animation, et l'accompagnement d'événements. Elle rassemble en ceci les jeunes artistes (musiciens, marionnettistes, compositeurs, cinéastes, danseurs, comédiens, performeurs), les techniciens, animateurs. GC se veut être un laboratoire pour créer des activités artistiques et culturelles. Il est divisé en quatre sous-groupes.
      </p>
      <button class="px-3 py-2 bg-cyan-600 text-white font-semibold w-fit rounded-md">Voir nos réalisations</button>
    </div>
    <img src="~/assets/images/laboratory.jpg" class="h-auto object-cover" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const { $gsap } = useNuxtApp()

onMounted(() => {
  $gsap.set(".texts", {
    y: 80,
    opacity: 0
  })

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: ".card",
      start: "top top",
      end: "+=1500",
      scrub: true,
      pin: true
    }
  })

  tl
  .to(".overlay", { opacity: 0.75 })
  .to(".card", { "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }, 0)
  .to(".texts", { y: 0, opacity: 1 }, 0)
})

</script>
<style scoped>
.card {
  clip-path: polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%);
}
</style>