<template>
    <section class="relative py-40 bg-bgcolor">
        <BGPattern/>
        <div class="relative flex flex-wrap items-center justify-between w-11/12 mx-auto gap-y-6 2xl:8/12 sm:w-10/12">
           <div class="w-full bg-black bg-center bg-cover md:w-6/12 lg:w-6/12 aspect-square">
            <div class="bg-primary/30 h-full w-[85%] border-white border-e-[2px] rounded-e-[160px] flex flex-col justify-center gap-3">
                <div class="flex">
                    <span class="w-[72px] h-[72px] bg-primary"></span>
                    <h1 class="-ms-10 text-offwhite font-[600] 2xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl tracking-wide">Our Values</h1>
                </div>
                <p class="ms-4 px-6 text-offwhite font-[500] 2xl:text-2xl lg:text-xl md:text-lg sm:text-md text-justify">
                At the heart of IBI are 4 core values we stand
                and live by. These values pave the way for a
                responsible workforce that strives to do its best
                for businesses that need us.</p>
            </div>
            <!-- <img src="" alt="IBI Holding" width="54" height="53" center cover responsive loading="lazy" /> -->
           </div>
            <ul role="list" class="w-full space-y-10 lg:w-5/12 md:w-5/12 list-style-none">
                <li v-for="(item, key) in data" :key="key" class="flex gap-x-4 gap-y-10">
                    <span class="text-offwhite h-[32px] w-[32px] bg-primary font-[900] 2xl:text-xl lg:text-lg md:text-md p-3 grid place-content-center">0{{ item.id }}</span>
                    <div class="space-y-3">
                        <h2 class="text-offwhite font-[600] 2xl:text-xl lg:text-lg md:text-md">{{ item.title }}</h2>
                        <p class="text-offwhite 2xl:text-xl lg:text-lg md:text-md font-[500]">{{ item.content }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import BGPattern from './icons/BGPattern.vue';

defineProps({
    data: Array
})
</script>
