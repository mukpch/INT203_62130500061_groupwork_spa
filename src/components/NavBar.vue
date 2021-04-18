<template>
  <div class="navbar">
    <hover-click>
      <router-link to="/" class="px-8">Home</router-link>
    </hover-click>
    <hover-click>
      <router-link to="/timetable" class="px-8">Timetable</router-link>
    </hover-click>
    <hover-click>
      <router-link to="/aboutus" class="px-8">About Us</router-link>
    </hover-click>
  </div>
</template>

<script>
import HoverClick from './HoverClick.vue';
export default {
  components: { HoverClick },
};
</script>