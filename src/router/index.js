import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DraggableDND from "@/components/Draggable-DND";
import FolderList from "@/components/FolderList";
import DND from "@/components/DND";
import DoubleDND from "@/components/doubleDND";
import Grid from "@/components/Grid";
import Home from "@/components/Home";

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: "/home",
      name: "Home",
      component: Home,
      children: [
        {
          path: "helloWorld",
          name: "HelloWorld",
          component: HelloWorld
        },
        {
          path: "draggableDND",
          name: "draggableDND",
          component: DraggableDND
        },
        {
          path: "folderList",
          name: "FolderList",
          component: FolderList
        },
        {
          path: "dnd",
          name: "DND",
          component: DND
        },
        {
          path: "doubleDND",
          name: "DoubleDND",
          component: DoubleDND
        },
        {
          path: "grid",
          name: "Grid",
          component: Grid
        }
      ]
    },
    {
      path: "/",
      name: "Home",
      component: Home
    }
  ]
});
