<script setup>
definePageMeta({
    layout: 'home'
})
const { $sayHello } = useNuxtApp()
$sayHello('alksdfasdfasd')
const { sayHello } = useUtils()
sayHello()
</script>
<template>
    <h1>Home Vue</h1>
    <div class="text-red-500">
        <IconsBell />
    </div>
    <!-- <img src="@/assets/36389878520045826.jpg" alt="p" /> -->
</template>