<template>
  <div class="fixed shadow bg-gray-50 backdrop-blur py-1 px-16 w-full">
    <nav class="flex justify-between w-full items-center">
      <NuxtLink href="/">
        <img class="shrink-0 w-16 h-16" src="~/assets/images/gc-logo.png" />
      </NuxtLink>
      <ul class="flex items-center justify-evenly gap-4">
        <NuxtLink href="/" :class="$route.path === '/' ? 'text-emerald-600' : ''" class="font-semibold">Accueil</NuxtLink>
        <NuxtLink href="/" class="font-semibold hover:text-emerald-600">A propos</NuxtLink>
        <NuxtLink href="/" class="font-semibold hover:text-emerald-600">Services</NuxtLink>
        <NuxtLink href="/" class="font-semibold hover:text-emerald-600">Portfolio</NuxtLink>
        <!-- <NuxtLink href="/" class="font-semibold">Contact</NuxtLink> -->
      </ul>
      <div>
        <NuxtLink class="px-3 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-md ease-in duration-75">Nous contacter</NuxtLink>
      </div>
    </nav>
  </div>
</template>