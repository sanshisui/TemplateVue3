<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header >Header</a-layout-header>
    <a-layout>
      <a-layout-sider>
        <a-menu mode="inline">
          <a-menu-item key="/app/page1">
            <span>page1</span>
          </a-menu-item>
          <a-menu-item key="/app/page2">
            <span>page2</span>
          </a-menu-item>
          <a-menu-item key="/app/page3">
            <span>page3</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content><router-view/></a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>
<script setup lang="ts">






</script>
<style scoped>

</style>