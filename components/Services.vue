<template>
  <div class="intro-service h-screen px-10 gap-8 flex flex-col justify-center">
    <h3 class="text-8xl font-bold txt">Les 4 Engrenages <br> de Notre Impact</h3>
    <p class="text-2xl my-4 leading-tight font-light txt"><span class="text-yellow-500 font-bold">Génies-Club,</span> c'est l'union de quatre branches dynamiques, chacune guidée par une mission unique et complémentaire. Ensemble, elles façonnent l'avenir de l'association, renforçant son impact et propulsant ses ambitions. Chaque branche incarne un pilier essentiel, contribuant activement à l'atteinte des objectifs communs, dans un esprit de collaboration, d'innovation et de passion.</p>
  </div>

  <div class="scroll-section overflow-hidden">
    <div class="wrapper h-screen">
      <div role="list" class="list flex justify-start items-center h-full relative p-1">
        <div role="listitem" class="bg-slate-700 text-white item w-screen h-full flex absolute inset-0 overflow-hidden shadow-md px-8">
          <div class="left flex-col justify-center items-start p-1.5 flex relative w-[60%]">
            <h2 class="mt-0 mb-4 text-6xl font-bold">Génies-Club Studios</h2>
            <p class="text-xl"><span class="font-bold text-yellow-500">Génies-Club</span> révèle les talents cachés en offrant un studio audiovisuel aux artistes démunis, pour donner vie à leurs oeuvres et partager leur créativité avec le monde.</p>
          </div>
          <div class="w-[40%]">
            <img src="~/assets/images/mic.png" alt="illustration" class="object-cover h-full" />
          </div>
        </div>
        <div role="listitem" class="bg-slate-700 text-white item w-screen h-full flex absolute inset-0 overflow-hidden shadow-md px-8">
          <div class="left flex-col justify-center items-start p-1.5 flex relative w-[50%]">
            <h2 class="mt-0 mb-4 text-6xl font-bold">Génies-Club Bibliothèque</h2>
            <p class="text-xl">Lié aux arts et donc à l'écriture et la littérature, <span class="font-bold text-yellow-500">Génies-Club</span> inspire les enfants à travers des bibliothèques et des activités culturelles, apportant le plaisir de lire là où les livres manquent.</p>
          </div>
          <div class="w-[50%]">
            <img src="~/assets/images/gc-biblio.png" alt="illustration" class="object-cover h-full" />
          </div>
        </div>
        <div role="listitem" class="bg-slate-700 text-white item w-screen h-full flex absolute inset-0 overflow-hidden shadow-md px-8">
          <div class="left flex-col justify-center items-start p-1.5 flex relative w-[50%]">
            <h2 class="mt-0 text-6xl font-bold">Trans Balabala</h2>
            <span class="uppercase my-3 font-bold">De l'art pour créer et sensibiliser</span>
            <p class="text-xl"><span class="font-bold text-yellow-500">Génies-Club</span> prend la route avec une camionnette créative, un laboratoire mobile où l'art rencontre le public, transformant chaque rue en scène, bibliothèque ou studio engagé.</p>
          </div>
          <div class="w-[50%]">
            <img src="~/assets/images/tbb.png" alt="illustration" class="object-contain w-md h-full" />
          </div>
        </div>
        <div role="listitem" class="bg-slate-700 text-white item w-screen h-full flex absolute inset-0 overflow-hidden shadow-md px-8">
          <div class="left flex-col justify-center items-start p-1.5 flex relative w-[50%]">
            <h2 class="mt-0 mb-4 text-6xl font-bold">Aura Services</h2>
            <p class="text-xl">Aura Services, le réseau de <span class="font-bold text-yellow-500">Génies-Club</span> qui connecte artistes et organisateurs pour des événements inoubliables, rendant chaque talent visible et accessible.</p>
          </div>
          <div class="w-[50%]">
            <img src="~/assets/images/aura-services.png" alt="illustration" class="object-cover h-full" />
          </div>
        </div>
      </div>
    </div>
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

  tl.to(".txt", {
    y: 0, 
    ease: "power4.out",
    duration: 0.5,
    opacity: 1,
    delay: 1, 
    stagger: 0.5,
  }, 0)

  const initScroll = () => {
    const scrollSection = document.querySelector('.scroll-section') as HTMLElement
    const wrapper = document.querySelector('.wrapper') as HTMLElement
    const items: NodeListOf<HTMLElement> = wrapper?.querySelectorAll('.item')

    items?.forEach((item, index) => {
      if (index !== 0) $gsap.set(item, { xPercent: 100 })
    })

    const tl2 = $gsap.timeline({
      scrollTrigger: {
        trigger: scrollSection,
        start: "top top",
        end: () => `+=${items?.length * 100}%`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
      defaults: { ease: "none" },
    })

    items?.forEach((item, index) => {
      if (index < items.length - 1) {
        tl2.to(item, { 
          scale: 0.9,
          borderRadius: "10px",
          opacity: 0
        })
      }

      tl2.to(items[index + 1], {
        xPercent: 0,
      }, "<")
    }) 
  }
  
  initScroll()
})

</script>
