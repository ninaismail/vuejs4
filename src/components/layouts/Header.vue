<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue';

const navlinks = [
  { id: 1, name: 'Responsibility', to: '#responsibility' },
  { id: 2, name: 'Approach', to: '#approach' },
  { id: 3, name: 'Investments', to: '#investments' },
];

const isOpen = ref(false);
const isHover = ref(false);
const changeColor = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const handleScroll = () => {
  if (window.scrollY > 10) {
    changeColor.value = true;
  } else {
    changeColor.value = false;
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
})

</script>
<template>
<div v-if="isOpen" class="fixed inset-0 z-[3] w-full h-screen" @click="isOpen = false"/>
 <header class="fixed inset-0 z-[5] h-fit mx-auto py-3"
 :class="changeColor || isOpen === true ? 'bg-bgcolor shadow-lg' : 'bg-transparent'">
  <div class="relative items-center justify-center mx-auto 2xl:w-8/12 sm:w-10/12 lg:flex">
    <RouterLink id="Home" aria-label="go to homepage" to="/">
      <img src="/logo.svg" alt="IBI Holding" width="241" height="76" center cover responsive loading="eager" class="aspect-3.17/1 max-lg:ps-[8.333333%] max-sm:ps-6"/>
    </RouterLink>
    <!-- Desktop -->
    <nav class="items-center justify-center hidden gap-3 ps-20 xl:gap-10 lg:w-10/12 lg:flex">
      <div v-for="(item, key) in navlinks" :key="key" class="relative">
        <RouterLink :id="item.name" :aria-label="'go to' + item.name" :to="item.to"   
        class="px-3 cursor-pointer font-[500] 2xl:text-[22px] lg:text-xl md:text-lg sm:text-md text-offwhite group"
        @mouseenter="isHover = item.id">
        <span>{{ item.name }}</span>
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-400"></span>
        </RouterLink>
      </div> 
    </nav> 
    <a prefetch="false" aria-label="contact us" href="tel:0097122222130" class="text-nowrap lg:block hidden font-[800] 2xl:text-[22px] lg:text-xl md:text-lg sm:text-md rounded-full top-4 w-fit cursor-pointer py-2 px-5 transition-all duration-400 text-center text-offwhite bg-primary hover:brightness-75">Contact Us</a>
    <!-- Mobile -->
    <button aria-label="open menu" class="absolute flex items-center justify-center w-8 h-8 right-[8.333333%] lg:hidden top-6" @click="toggleOpen">
      <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" fill="white" viewBox="0 0 50 50">
      <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
      </svg>   
      <Transition>
      <h1 v-if="isOpen" class="text-4xl text-offwhite">X</h1>
      </Transition> 
    </button>
    <Transition>
    <nav v-show="isOpen" class="w-full py-10 max-lg:ps-[8.333333%] space-y-6 lg:hidden bg-bgcolor">
      <div v-for="(item, key) in navlinks" :key="key">
        <RouterLink :id="item.name" :aria-label="'go to' + item.name" :to="item.to" 
        class="w-6/12 font-[500] 2xl:text-[22px] lg:text-xl md:text-lg sm:text-md cursor-pointer text-offwhite drop-shadow-md group">
          <span>{{ item.name }}</span>
          <span class="absolute -bottom-3 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-400"></span>
        </RouterLink>
      </div>
      <a prefetch="false" aria-label="contact us" href="tel:0097122222130" class="font-[800] 2xl:text-[22px] lg:text-xl md:text-lg sm:text-md w-fit block cursor-pointer py-2 px-5 transition-all duration-400 text-center rounded-full text-offwhite bg-primary hover:brightness-75">Contact Us</a>
    </nav>      
    </Transition>    
  </div>
  </header>
</template>