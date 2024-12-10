<script setup>
definePageMeta({ middleware: 'auth' })
const counter = useCounter()
</script>
<template>
    <div>
        <h1>Index page</h1>
        <div>
            <button @click="counter++">{{ counter }}</button>
        </div>
    </div>
</template>