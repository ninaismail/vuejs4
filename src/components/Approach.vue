<template>
    <section class="flex flex-col justify-around 2xl:8/12 sm:w-10/12 w-11/12 gap-3 mx-auto">
        <div class="flex flex-col gap-3 mx-auto">
        <h1 class="text-white font-[600] 2xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl tracking-wide">Our Sustainable Approach</h1>
        <p class="text-white font-[500] 2xl:text-2xl lg:text-xl md:text-lg sm:text-md">Our sustainability agenda relies on our commitment to Environmental, Social, and Governance (ESG) principles. We integrate significant ESG factors into our
        decision-making processes, guided by our ESG Policy. Our approach includes active ownership, addressing systemic ESG issues, collaboration, and advocacy.
        We believe that responsible investing contributes to long-term sustainable value for our stakeholders.</p>
       </div>
       <div class="flex flex-col gap-3 mx-auto">
        <h2 class="text-white font-[600] 2xl:text-2xl lg:text-xl md:text-lg sm:text-md tracking-wide">Our sustainability framework relies on 3 dimensions:</h2>
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-6">
            <div v-for="(item, key) in data" :key="key" class="col-span-1 flex flex-col justify-center items-center gap-3 group">
                <component :is="item.icon" class="w-40 aspect-square"/>
                <h3 class="text-white group-hover:text-primary transition-all duration-400 font-[600] 2xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl tracking-wide">{{ item.title }}</h3>
                <p class="text-white group-hover:text-primary transition-all duration-400 font-[500] 2xl:text-2xl lg:text-xl md:text-lg sm:text-md">{{ item.content }}</p>
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