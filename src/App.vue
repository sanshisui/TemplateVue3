<script setup lang="ts">

function toggleDarkMode() {
    document.documentElement.classList.toggle('my-app-dark');
}


</script>

<template>
    <NaveBar />
    
<Button label="Toggle Dark Mode" @click="toggleDarkMode()" />

</template>

<style scoped>

</style>
