<template>
	<div>
    <router-link to="/home/helloWorld">helloworld</router-link>
    <router-link to="/home/draggableDND">DraggableDND</router-link>
    <router-link to="/home/folderList">FolderList</router-link>
    <router-link to="/home/DND">DND</router-link>
    <router-link to="/home/doubleDND">doubleDND</router-link>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>
