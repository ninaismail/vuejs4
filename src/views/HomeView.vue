<script setup>
import Hero from '../components/Hero.vue'
import Commitment from '../components/Commitment.vue'
import iconEnvironment from '../components/icons/iconEnvironment.vue'
import iconGoverment from '../components/icons/iconGoverment.vue'
import iconSociety from '../components/icons/iconSociety.vue'
import Values from '../components/Approach.vue'
import Strategy from '../components/Strategy.vue'
const commitments = [
{title: 'Environment', content:'We invest in solutions that minimize environmental impact, promote renewable energy, and drive ecological innovation.', icon: iconEnvironment},
{title: 'Society', content:'We are committed to advancing social equity, supporting initiatives that improve quality of life, and creating opportunities for all.', icon: iconSociety},
{title: 'Governance', content:'Our governance practices ensure that we operate responsibly, ethically, and in alignment with the best interests of all stakeholders.', icon: iconGoverment}
]

const approaches = [
{id:1, title: 'Integrity', content:'Every decision is driven by transparency, fairness, and an unyielding commitment to ethical standards.'},
{id:2, title: 'Innovation', content:'We are constantly pushing the boundaries of groundbreaking ideas and technologies.'},
{id:3, title: 'Sustainability', content:'We ensure that every project contributes to a healthier and more resilient planet.'},
{id:4, title: 'Impact', content:' Every investment is a calculated move towards creating profound, lasting change on a global scale.'}
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
    <Commitment :data="commitments"/>
    <Values :data="approaches"/>
    <Strategy :data="investments"/>
  </main>
</template>
