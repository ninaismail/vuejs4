<script setup>
import Hero from '../components/Hero.vue'
import Approach from '../components/Approach.vue'
import iconEnvironment from '../components/icons/iconEnvironment.vue'
import iconEconomy from '../components/icons/iconEconomy.vue'
import iconSociety from '../components/icons/iconSociety.vue'
const approaches = [
{title: 'Environmet', content:'Investing in environmentally friendly companies working towards the same sustainable goals as us.', icon: iconEnvironment},
{title: 'Economy', content:'Supporting long-term economic growth without depleting resources.', icon: iconEconomy},
{title: 'Society', content:'Ensuring a happy and healthy society where human rights are respected.', icon: iconSociety}
]
</script>

<template>
  <main>
    <Hero />
    <Approach :data="approaches"/>
  </main>
</template>
