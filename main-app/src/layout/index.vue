<template>
  <div
    class="h-full flex">
    <div class="py-2 px-8">
      <router-link to="/hello">
        <div class="text-blue-600">hello</div>
      </router-link>
      <router-link to="/app1/hello">
        <div class="mt-4 text-blue-600">微应用1</div>
      </router-link>
    </div>
    <div class="flex-1 w-0">
      <router-view />
    </div>
  </div>
</template>
