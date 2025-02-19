<template>
  <header class="h-screen bg-slate-50">
    <Navbar />
    <div class="flex flex-col max-w-3xl mx-auto w-full h-screen items-center pt-24">
      <h1 class="font-bold text-5xl text-center">
        Transformez vos idées en expériences inoubliables
      </h1>
      <p class="my-6 text-sm text-center font-medium">
        prêt à voir l'extraordinaire prendre vie sous vos yeux ? <br/> Découvrez comment chaque détail devient une étincelle de magie, <br/> chaque projet une histoire à partager.
      </p>
      <div class="my-4">
        <img src="~/assets/images/hero.png" class="size-80" />
      </div>
    </div>
  </header>
  
</template>

<script setup lang="ts">
import Navbar from "~/components/Navbar.vue"

</script>