<script setup>
import { RouterLink } from 'vue-router'

const footerlinks = [
  { id: 1, name: 'Home', to: '/' },
  { id: 2, name: 'Values', to: '/' },
  { id: 3, name: 'Investments', to: '/' },
];

</script>

<template>
    <hr class="w-full h-[4px] bg-primary border-none"/>
    <footer class="flex flex-wrap h-[60vh]">
      <div class="w-full bg-black bg-center bg-cover md:w-1/2 aspect-sqaure">
      </div>
      <div class="relative flex flex-col justify-center w-full bg-center bg-cover bg-[#646565] md:w-1/2">
          <div class="flex justify-center gap-3 p-10">
            <div class="space-y-10">
              <div class="space-y-6">
                <h1 class="text-offwhite 2xl:text-xl lg:text-lg md:text-md font-[700]">Office Location</h1>
                <p class="cursor-pointer font-[500] 2xl:text-xl lg:text-lg md:text-md text-offwhite lg:w-2/3">
                  UAE, Abu Dhabi, Addax tower, Al reem island, office 3003
              </p>                
              </div>
              <div class="space-y-6">
                <h1 class="text-offwhite 2xl:text-xl lg:text-lg md:text-md font-[700]">Email</h1>
                <a prefetch="false" aria-label="email us" href="mailto:info@ibiholding.com"   
                class="cursor-pointer font-[500] 2xl:text-xl lg:text-lg md:text-md text-offwhite hover:brightness-125">
                  info@ibiholding.com
                </a>                
              </div>
              <div class="space-y-6">
                <h1 class="text-offwhite 2xl:text-xl lg:text-lg md:text-md font-[700]">Phone</h1>
                <a prefetch="false" aria-label="email us" href="tel:"   
                class="cursor-pointer font-[500] 2xl:text-xl lg:text-lg md:text-md text-offwhite hover:brightness-125">
                info@ibiholding.com
              </a>                
              </div>
            </div> 
            <div class="space-y-6">
              <h1 class="text-offwhite 2xl:text-xl lg:text-lg md:text-md font-[700]">Menu</h1>
              <RouterLink v-for="(item, key) in footerlinks" :key="key" :id="item.name" :aria-label="'go to' + item.name" :to="item.to"   
              class="block cursor-pointer font-[500] 2xl:text-xl lg:text-lg md:text-md text-offwhite hover:brightness-125">
              {{ item.name }}
              </RouterLink>
            </div> 
          </div>
          <div class="absolute text-center min-h-[50px] w-full flex flex-col items-center justify-center bg-bgcolor bottom-0 left-0">
            <p class="tracking-wide text-white max-sm:text-[14px]">© All Rights Reserved, 2024 IBI Holding.</p>
          </div>
      </div>
    </footer>
</template>    