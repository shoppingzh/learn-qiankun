<template>
  <div class="flex">
    <div class="w-[300px]">
      <router-link to="/hello">
        <button>去内页</button>
      </router-link>
      <router-link to="/app1/hello">
        <button>去子页面</button>
      </router-link>
    </div>
    <div id="subapp" class="flex-1 w-0">
      <router-view />
    </div>
  </div>
</template>
