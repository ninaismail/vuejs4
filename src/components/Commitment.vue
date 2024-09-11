<template>
    <section class="flex flex-col justify-around w-11/12 gap-10 py-40 mx-auto 2xl:8/12 sm:w-10/12">
        <div class="flex flex-col gap-3 mx-auto">
        <h1 class="text-offwhite font-[600] 2xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl tracking-wide">Our Commitment to a <br class="hidden lg:block"/> Sustainable Future</h1>
        <p class="text-offwhite font-[500] 2xl:text-2xl lg:text-xl md:text-lg sm:text-md text-justify">Our responsibility goes beyond financial returns. We are dedicated to creating a future where innovation and sustainability are inseparably connected Our approach is rooted in the belief that true progress is only achieved when it benefits people, the planet, and future generations.</p>
       </div>
       <div class="flex flex-col gap-6 mx-auto">
        <h2 class="text-offwhite font-[600] 2xl:text-2xl lg:text-xl md:text-lg sm:text-md tracking-wide">Our guiding principles</h2>
        <div class="grid w-full grid-cols-1 gap-20 lg:grid-cols-3 sm:grid-cols-2">
            <div v-for="(item, key) in data" :key="key" class="flex flex-col items-center justify-center col-span-1 gap-6 group">
                <component :is="item.icon" class="w-40 aspect-square"/>
                <h3 class="text-offwhite group-hover:text-primary transition-all duration-400 font-[600] 2xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl tracking-wide text-center">{{ item.title }}</h3>
                <p class="text-offwhite group-hover:text-primary transition-all duration-400 font-[500] 2xl:text-2xl lg:text-xl md:text-lg sm:text-md text-center">{{ item.content }}</p>
           </div>
        </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    data: Array
})
</script>