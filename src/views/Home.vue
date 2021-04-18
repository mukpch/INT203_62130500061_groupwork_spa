<template>
  <div class="w-full">

    <h1 class=" text-purple-500 text-md flex justify-end pt-20 mr-10">waste your time and waste of your life ,</h1>

    <h1 class=" text-yellow-500 text-md flex justify-end pt-2 mr-10">OR master your time and master your life.</h1>

    <h1 class="font-semibold text-red-400 text-4xl flex justify-center pt-36">Hey guys!</h1>

    <h1 class="font-semibold text-red-400 text-2xl flex justify-center pt-5">Are u raedy to do the TIMETABLE ?</h1>

    <div class="pt-20 text-purple-500">
      <hover-click>
        <router-link to="/timetable" class="flex justify-center font-semibold text-xl">Yep!</router-link>
      </hover-click>
    </div>
    
  </div>
</template>

<script>
import HoverClick from '../components/HoverClick.vue';
export default {
  components: { HoverClick },
};
</script>