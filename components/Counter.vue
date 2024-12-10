<script setup>
const counter = useCounter()
</script>
<template>
    <div>
        <button @click="counter++">{{ counter }}</button>
    </div>
</template>