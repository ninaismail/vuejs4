<template>
    <section id="responsibility" class="bg-bgcolor1">
        <div class="relative bg-bgcolor custom-bg sm:rounded-b-[160px] rounded-b-[100px] border-b border-offwhite w-[102%] overflow-hidden sm:-left-3 -left-1">
        <div class="flex flex-col justify-around w-11/12 gap-10 py-20 mx-auto 2xl:w-8/12 sm:w-10/12">
            <div class="flex flex-col gap-6 mx-auto 2xl:gap-10">
            <h1 class="text-offwhite font-[600] 2xl:text-[68px] lg:text-7xl md:text-6xl sm:text-5xl text-4xl tracking-wide">Our Commitment to a Sustainable Future</h1>
            <p class="text-offwhite font-[500] 2xl:text-[22px] lg:text-xl md:text-lg sm:text-md">Our responsibility goes beyond financial returns. We are dedicated to creating a future where innovation and sustainability are inseparably connected. Our approach is rooted in the belief that true progress is only achieved when it benefits people, the planet, and future generations.</p>
        </div>
        <div class="flex flex-col gap-6 mx-auto 2xl:gap-10">
            <h2 class="text-offwhite font-[600] 2xl:text-2xl lg:text-xl md:text-lg sm:text-md tracking-wide">Our guiding principles</h2>
            <div class="grid w-full grid-cols-1 gap-6 2xl:gap-10 lg:grid-cols-3 xs:grid-cols-2">
                <div v-for="(item, key) in data" :key="key" class="flex flex-col items-center h-[400px] col-span-1 border border-offwhite bg-bgcolor group">
                    <div class="relative top-0 w-full" :class="isClicked === key ? 'h-auto py-10' : 'h-[95%]'">
                        <BGOrangePattern/>
                        <div class="relative z-[1] h-full w-full flex flex-col items-center justify-center 2xl:gap-10 gap-6">
                            <component v-if="isClicked != key" :is="item.icon" class="h-20"/>
                            <h3 class="text-offwhite font-[600] 2xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl tracking-wide text-center">{{ item.title }}</h3>
                        </div>
                    </div>         
                    <div class="flex flex-col items-center justify-center w-full px-6 space-y-3 transition-all duration-1000 cursor-pointer" 
                    @click="isClicked = key" :class="isClicked !== key ? 'h-auto py-6' : 'h-[90%]'">
                        <p v-if="isClicked === key" class="text-offwhite font-[500] 2xl:text-2xl lg:text-xl md:text-lg sm:text-md">{{ item.content }}</p>
                        <p  v-if="isClicked != key" class="w-full flex items-center justify-between text-offwhite font-[500] 2xl:text-2xl lg:text-xl md:text-lg sm:text-md"><span>Read More</span><span>></span></p>
                    </div>     
                </div>
            </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import BGOrangePattern from './icons/BGOrangePattern.vue';
const isClicked = ref(0);
defineProps({
    data: Array
})
</script>