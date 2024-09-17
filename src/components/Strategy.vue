<template>
    <section id="investments" class="relative w-full h-full py-20 bg-bgcolor custom-bg">
        <div class="relative flex flex-col justify-around w-11/12 gap-10 mx-auto 2xl:w-8/12 sm:w-10/12">
            <div class="flex flex-col gap-6 mx-auto 2xl:gap-10">
                <h1 class="text-offwhite font-[600] 2xl:text-[68px] lg:text-7xl md:text-6xl sm:text-5xl text-4xl tracking-wide">Strategic Power in Action</h1>
                <p class="text-offwhite font-[500] 2xl:text-[22px] lg:text-xl md:text-lg sm:text-md ">IBI Holding invests in tech companies and adds value to industries by nurturing new businesses and funding innovation initiatives that need the support to drive change.</p>
           </div>
            <div class="grid w-full grid-cols-1 gap-6 2xl:gap-10 lg:grid-cols-3 xs:grid-cols-2">
                <div v-for="(item, key) in data" :key="key" class="relative flex flex-col justify-end col-span-1 2xl:px-6 lg:px-4 px-6 h-[578px]">
                    <img
                    :src="item.image"
                    alt="IBI Holding"
                    width="761"
                    height="578"
                    class="absolute inset-0 w-full h-full"
                    loading="lazy"
                    responsive
                    center cover
                    />
                    <div class="relative w-full p-6 space-y-6 cursor-pointer 2xl:bottom-10 lg:bottom-5 bottom-10 bg-bgcolor1/70" 
                    @click="isOpen = key">
                        <hr class="absolute left-0 -top-1 bg-primary h-[10px] border-0 transition-all duration-1000"
                        :class=" isOpen === key ? 'w-2/3' : 'w-1/4'"/>
                        <div class="flex items-center justify-between gap-6 2xl:gap-10">
                            <h2 class="text-offwhite font-[600] 2xl:text-2xl lg:text-xl md:text-lg w-1/4 sm:text-md tracking-wide">{{ item.title }}</h2>
                            <span :class="{'-scale-y-100' : isOpen === key}" class="-mt-6 duration-1000 transform">
                                <svg fill="#FDF1F5" class="w-10 h-10" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                <g id="SVGRepo_iconCarrier"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/> </g>
                                </svg>
                            </span>
                        </div>
                        <p v-if="isOpen === key" class="transition-all duration-1000 text-offwhite 2xl:text-[22px] lg:text-xl md:text-lg sm:text-md font-[500]">{{ item.content }}</p>                            
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
defineProps({
    data: Array
})
const isOpen = ref(0);
</script>
