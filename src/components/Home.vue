<template>
  <div>
    <template v-if="$route.path=='/home'">
      <router-link to="/home/helloWorld">helloworld</router-link>
      <router-link to="/home/draggableDND">DraggableDND</router-link>
      <router-link to="/home/folderList">FolderList</router-link>
      <router-link to="/home/DND">DND</router-link>
      <router-link to="/home/doubleDND">doubleDND</router-link>
      <router-link to="/home/Grid">NineGrid</router-link>
      <router-link to="/home/RxJsDemo">RxJsDemo</router-link>
    </template>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "Home",
    updated(){
            console.log(this.$route)
    },
    created(){
      console.log(this.$route)
    }
  };
</script>

<style scoped>
</style>
