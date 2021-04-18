<template class="">
  <base-card class="px-6 py-4">
    <ul>
      <li>
        <div>{{ lists.name }} :</div>
        <div>Had the note - " {{ lists.note }} "</div>
        <span>On {{ lists.day }}, {{ lists.date }}</span>
        <button @click="showData(lists)" class="ml-auto">
          <span class="material-icons pl-5">edit</span>
        </button>
        <button @click="deleteData(lists.id)" class="ml-auto">
          <i class="material-icons">delete</i>
        </button>
      </li>
    </ul>
  </base-card>
</template>

<script>
export default {
  props: {
    lists: Object,
  },

  methods: {
    deleteData() {
      this.$emit("click-delete", this.lists.id);
    },
    showData() {
      this.$emit("click-edit", this.lists);
    },
  },
};
</script>
