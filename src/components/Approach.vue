<template>
    <section id="approach" class="bg-bgcolor custom-bg">
    <div class="relative bg-bgcolor1 sm:rounded-b-[160px] rounded-b-[40px] border-b border-offwhite w-[102%] overflow-hidden sm:-left-3 -left-1">
        <div class="relative flex flex-wrap items-center justify-between w-11/12 py-20 mx-auto gap-y-6 2xl:w-8/12 sm:w-10/12">
            <div class="w-full bg-center bg-cover bg-values 2xl:w-[48%] lg:w-[51%] aspect-1.14/1 flex flex-col justify-center gap-y-10">
                    <div class="relative flex">
                        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.92 234.07" class="absolute left-0 w-auto h-32">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <path class="fill-[#f2780b] stroke-none" d="M0,0v234.07c2.42-19.61,24.71-79.16,115.92-118.16V0H0Z"/>
                        </g>
                        </svg>
                        <h1 class="text-offwhite font-[600] 2xl:text-[68px] lg:text-7xl md:text-6xl sm:text-5xl text-4xl tracking-wide relative z-2 left-10">Our Approach</h1>
                    </div>
                    <p class="relative z-2 ms-10 pe-6 text-offwhite font-[500] 2xl:text-[22px] lg:text-xl md:text-lg sm:text-md md:w-3/4 w-[80%]">
                        We offer strategic capital and deep expertise at crucial moments to empower visionary founders. Our approach combines innovative support with a focus on sustainability, ensuring exceptional returns and lasting impact.</p>
                <!-- <img src="" alt="IBI Holding" width="54" height="53" center cover responsive loading="lazy" /> -->
            </div>
            <ul role="list" class="w-full space-y-10 2xl:w-[48%] lg:w-[48%] list-style-none">
                <li v-for="(item, key) in data" :key="key" class="flex gap-x-4 gap-y-10">
                    <span class="text-offwhite h-[38px] w-[38px] bg-primary font-[900] 2xl:text-[22px] lg:text-xl md:text-lg sm:text-md p-3 grid place-content-center">0{{ item.id }}</span>
                    <div class="space-y-5">
                        <h2 class="text-offwhite font-[600] 2xl:text-[22px] lg:text-xl md:text-lg sm:text-md">{{ item.title }}</h2>
                        <p class="text-offwhite 2xl:text-[22px] lg:text-xl md:text-lg sm:text-md font-[500]">{{ item.content }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>        
    </section>
</template>

<script setup>
defineProps({
    data: Array
})
</script>
