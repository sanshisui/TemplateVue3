
<template>
    <div class="card">
        <Menubar>
            <template #start>
                <span class="pi pi-moon">开始</span>
            </template>
            
            <template #end>
                <div class="flex items-center gap-2">
                    <Button :icon="`pi ${currentTheme}`" variant="text" raised  @click="toggleDarkMode" />
                </div>
            </template>
        </Menubar>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const currentTheme = ref('pi-sun');



function toggleDarkMode() {
    currentTheme.value = currentTheme.value === 'pi-sun' ? 'pi-moon' : 'pi-sun';
    document.documentElement.classList.toggle('my-app-dark');
}
</script>
