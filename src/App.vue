<template>
  <div class="app">
    <!-- Sidebar -->
    <SideBar />

    <!-- Content -->
    <router-view />
  </div>
</template>

<script setup>
import SideBar from "./components/SideBar.vue";
</script>

<style lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --background-secondary: #d1d5d8;

  --button-primary: #2962ff;
  --button-primary-2: #0039cb;
  --button-secondary: #455a64;
  --button-secondary-2: #1c313a;
  --button-danger: #d32f2f;
  --button-danger-2: #9a0007;

  --sidebar-width: 300px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}
body {
  background: var(--light);
}
button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
.app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 2rem;
    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>
