<script setup>
import iconLogo from '../icons/iconLogo.vue'
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue';

const navlinks = [
  { id: 1, name: 'Home', to: '/' },
  { id: 2, name: 'Values', to: '/' },
  { id: 3, name: 'INNOVATIONS', to: '/' },
  { id: 4, name: 'INVESTMENTS', to: '/' },
];

const isOpen = ref(false);
const isHover = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const handleScroll = () => {
  if (window.scrollY > 10) {
    changecolor.value = true;
  } else {
    changecolor.value = false;
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
 <header class="absolute inset-0 z-[5] h-[74px] mx-auto py-3"
 :class="changecolor ? 'bg-bgcolor shadow-md' : 'bg-transparent'">
  <div class="items-center justify-between w-10/12 mx-auto lg:flex">
    <div class="w-2/12">
     <iconLogo/>
    </div>
    <!-- Desktop -->
    <nav class="items-center justify-center hidden w-9/12 gap-10 lg:flex">
      <div v-for="(item, key) in navlinks" :key="key" class="relative">
        <RouterLink :id="item.name" :aria-label="'go to' + item.name" :to="item.to"   
        class="px-3 cursor-pointer font-[500] text-xl text-white group"
        @mouseenter="isHover = item.id">
        <span>{{ item.name }}</span>
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-600"></span>
        </RouterLink>
      </div> 
    </nav> 
    <div class="flex justify-end w-2/12">
      <RouterLink id="go-to-contact-section" aria-label="go to contact section" to="/contact" class="max-lg:absolute right-[8.333333%] font-[800] text-2xl top-4 w-fit cursor-pointer py-2 px-5 transition-all duration-400 text-center rounded-[2px] text-white bg-primary hover:brightness-125">Contact Us</RouterLink>
    </div>
    <!-- Mobile -->
    <button aria-label="open menu" class="absolute flex items-center justify-center w-8 h-8 left-[8.333333%] lg:hidden top-7" @click="toggleOpen">
      <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" fill="white" viewBox="0 0 50 50">
      <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
      </svg>   
      <Transition>
      <h1 v-if="isOpen" class="text-2xl text-white">&#10005;</h1>
      </Transition> 
    </button>
    <Transition>
    <nav v-show="isOpen" class="w-full p-8 space-y-8 lg:hidden bg-bgcolor">
      <div v-for="(item, key) in navlinks" :key="key">
        <RouterLink :id="item.name" :aria-label="'go to' + item.name" :to="item.to" 
        class="w-6/12 font-[500] text-xl cursor-pointer text-white drop-shadow-md group">
          <span>{{ item.name }}</span>
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-600"></span>
        </RouterLink>
      </div>
    </nav>      
    </Transition>    
  </div>
  </header>
</template>