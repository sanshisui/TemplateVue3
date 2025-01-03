
<template>
    <div class="card">
        <Menubar>
            <template #start>
                <div class="card flex justify-center">
                    <Button label="新建连接" @click="visible = true" />
                    <Dialog v-model:visible="visible" :closable="false" header="新建连接"  modal :style="{ width: '30rem' }">
                    <div class="flex items-center gap-4 mb-4 mt-6">
                        <FloatLabel class="w-full md:w-56" variant="on">
                            <InputText id="地址" class="w-full" v-model="value3" />
                            <label for="地址">地址</label>
                        </FloatLabel>
                        <FloatLabel class="w-full md:w-56" variant="on">
                            <InputText id="端口" class="w-full" v-model="value3" />
                            <label for="端口">端口</label>
                        </FloatLabel>

                    </div>
                    <div class="flex items-center gap-4 mb-2">
                        <FloatLabel class="w-full md:w-56" variant="on">
                            <InputText id="连接名称" class="w-full" v-model="value3" />
                            <label for="连接名称">连接名称</label>
                        </FloatLabel>
                        <FloatLabel class="w-full md:w-56" variant="on">
                            <Select v-model="value4" inputId="连接方式" :showClear="true" :options="cities" optionLabel="name" class="w-full" />
                             <label for="连接方式">连接方式</label>
                        </FloatLabel>

                    </div>
                    <div class="flex justify-end gap-2 mt-6">
                        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
                        <Button type="button" label="Save" @click="visible = false"></Button>
                    </div>
                    </Dialog>
                </div>
                
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
const visible = ref(false);
const value3 = ref(null);
const value4 = ref(null);
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);



function toggleDarkMode() {
    currentTheme.value = currentTheme.value === 'pi-sun' ? 'pi-moon' : 'pi-sun';
    document.documentElement.classList.toggle('my-app-dark');
}
</script>
