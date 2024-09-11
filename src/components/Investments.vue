<template>
    <section class="relative py-20 bg-bgcolor">
        <BGPattern/>
        <div class="relative flex flex-col justify-around w-11/12 gap-10 mx-auto 2xl:8/12 sm:w-10/12">
            <div class="flex flex-col gap-3 mx-auto">
                <h1 class="text-offwhite font-[600] 2xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl tracking-wide">Strategic Power in Action</h1>
                <p class="text-offwhite font-[500] 2xl:text-2xl lg:text-xl md:text-lg sm:text-md text-justify">IBI Holding invests in tech companies and adds value to industries by nurturing new businesses, seeking
                partnerships and joint ventures, and funding innovation initiatives that need the support to drive change.</p>
           </div>
            <div class="flex flex-wrap items-center justify-between gap-y-10">
                <div v-for="(item, key) in data" :key="key" class="md:w-[48%] w-full aspect-square">
                    <div class="flex flex-col justify-end w-full h-full px-10 pb-40 bg-black bg-center bg-cover">
                        <hr class="w-2/3 bg-primary h-[10px] border-0"/>
                        <div class="relative p-6 space-y-10 cursor-pointer bg-offwhite/30 transition-height duration-600" @click="isOpen = key">
                            <div class="flex items-center justify-between gap-3">
                                <h2 class="text-offwhite font-[600] 2xl:text-2xl lg:text-xl md:text-lg lg:w-1/4 sm:text-md tracking-wide">{{ item.title }}</h2>
                                <span :class="{'-scale-y-100' : isOpen === key}" class="-mt-6 transition-all duration-600">
                                    <svg fill="#FDF1F5" class="w-10 h-10" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/> </g>
                                    </svg>
                                </span>
                            </div>
                            <p v-if="isOpen === key" class="text-offwhite 2xl:text-xl lg:text-lg md:text-md font-[500] text-justify">{{ item.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import BGPattern from './icons/BGPattern.vue';
defineProps({
    data: Array
})
const isOpen = ref(0);
</script>