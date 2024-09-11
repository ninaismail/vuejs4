<script setup>
import Hero from '../components/Hero.vue'
import Approach from '../components/Approach.vue'
import iconEnvironment from '../components/icons/iconEnvironment.vue'
import iconEconomy from '../components/icons/iconEconomy.vue'
import iconSociety from '../components/icons/iconSociety.vue'
import Values from '../components/Values.vue'
import Investments from '@/components/Investments.vue'
const approaches = [
{title: 'Environmet', content:'Investing in environmentally friendly companies working towards the same sustainable goals as us.', icon: iconEnvironment},
{title: 'Economy', content:'Supporting long-term economic growth without depleting resources.', icon: iconEconomy},
{title: 'Society', content:'Ensuring a happy and healthy society where human rights are respected.', icon: iconSociety}
]
const values = [
{id:1, title: 'Impact', content:'We drive meaningful change by purposefully creating positive impacts no matter how small.'},
{id:2, title: 'Trust', content:'Trust is our cornerstone. It underpins all our relationships and drives shared value creation.'},
{id:3, title: 'People-First', content:'By putting people first, we create an inclusive and growth-oriented culture through empathy, active listening, and human-centric practices.'},
{id:4, title: 'Innovation', content:'Pioneering Digital Futures: We continuously explore new horizons, creating state-of-the-art digital solutions to empower our stakeholders.'}
]
const investments = [
{title: 'Advanced Technologies', content:'We invest in next-generation industrial technologies, including AI-driven automation, advanced robotics, and breakthrough energy solutions, to drive innovation that sets new industry standards and opens up unprecedented possibilities.'},
{title: 'Infrastructure Projects', content:'We invest in next-generation industrial technologies, including AI-driven automation, advanced robotics, and breakthrough energy solutions, to drive innovation that sets new industry standards and opens up unprecedented possibilities.'},
{title: 'Green Innovation', content:'Our investments target green technologies and renewable energy projects, such as solar and wind power advancements, waste-to-energy solutions, and sustainable resource management systems, ensuring progress that aligns with global environmental goals.'},
{title: 'Industrial Ventures', content:'We empower high-impact ventures in industrial technology, such as next-gen manufacturing platforms, cutting-edge supply chain solutions, and disruptive industrial IoT applications, to redefine market dynamics and drive global transformation.'}
]
</script>

<template>
  <main>
    <Hero />
    <Approach :data="approaches"/>
    <Values :data="values"/>
    <Investments :data="investments"/>
  </main>
</template>
