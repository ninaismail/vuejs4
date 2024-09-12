<script setup>
import { RouterLink } from 'vue-router'
import IconLogoFooter from '../icons/iconLogoFooter.vue';

const footerlinks = [
  { id: 1, name: 'Home', to: '/' },
  { id: 2, name: 'Values', to: '/' },
  { id: 3, name: 'Investments', to: '/' },
];

</script>

<template>
    <hr class="w-full h-[4px] bg-primary border-none"/>
    <footer class="flex flex-wrap h-full">
      <div class="relative w-full bg-center bg-cover bg-footer lg:w-1/2 aspect-1.57/1 min-h-[60vh]">
      </div>
      <div class="relative flex flex-col justify-center w-full h-full bg-center bg-cover bg-bgcolor lg:w-1/2 min-h-[60vh]">
          <div class="flex flex-wrap justify-between h-full gap-6 p-6 2xl:p-10">
            <div class="2xl:w-[29%] lg:w-1/4 sm:w-1/3">
              <IconLogoFooter/>
              <h1 class="text-offwhite 2xl:text-[22px] lg:text-xl md:text-lg sm:text-md font-[700] mt-10 mb-6">Menu</h1>
              <RouterLink v-for="(item, key) in footerlinks" :key="key" :id="item.name" :aria-label="'go to' + item.name" :to="item.to"   
              class="block cursor-pointer font-[500] 2xl:text-[22px] lg:text-xl md:text-lg sm:text-md text-offwhite hover:brightness-125 space-y-3">
              {{ item.name }}
              </RouterLink>
            </div>             
            <div class="space-y-10 lg:w-3/4 2xl:w-5/12 sm:w-[48%]">
              <div class="space-y-6">
                <h1 class="text-offwhite 2xl:text-[22px] lg:text-xl md:text-lg sm:text-md font-[700]">Office Location</h1>
                <p class="cursor-pointer font-[500] 2xl:text-[22px] lg:text-xl md:text-lg sm:text-md text-offwhite 2xl:w-2/3">
                  UAE, Abu Dhabi, Addax tower, Al reem island, office 3003
              </p>                
              </div>
              <div class="space-y-6">
                <h1 class="text-offwhite 2xl:text-[22px] lg:text-xl md:text-lg sm:text-md font-[700]">Email</h1>
                <a prefetch="false" aria-label="email us" href="mailto:info@ibiholding.com"   
                class="block cursor-pointer font-[500] 2xl:text-[22px] lg:text-xl md:text-lg sm:text-md text-offwhite hover:brightness-125">
                  info@ibiholding.com
                </a>                
              </div>
              <div class="space-y-6">
                <h1 class="text-offwhite 2xl:text-[22px] lg:text-xl md:text-lg sm:text-md font-[700]">Phone</h1>
                <a prefetch="false" aria-label="email us" href="tel:"   
                class="block cursor-pointer font-[500] 2xl:text-[22px] lg:text-xl md:text-lg sm:text-md text-offwhite hover:brightness-125">
                info@ibiholding.com
              </a>                
              </div>
            </div> 
          </div>
          <p class="text-center tracking-wide font-[200] text-white max-sm:text-[14px] bg-bgcolor mt-auto mb-0">© All Rights Reserved, 2024 IBI Holding.</p>
      </div>      
    </footer>
</template>    