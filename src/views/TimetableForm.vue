<template>
  <h2 class="font-semibold text-purple-900 text-xl flex justify-center pt-28">
    Let's do the TIMETABLE !
  </h2>

  <form @submit.prevent="submitForm">
    <h1 class="enterName mt-10 ml-80 text-purple-600 text-lg">
      What should i call u ?
    </h1>
    <div class="mb-3 rounded-sm shadow p-2 ml-80 w-3/6 mt-2">
      <label class="label mx-3" for="name"></label>
      <input
        v-model="name"
        @blur="validating"
        placeholder="enter your name ..."
      />
    </div>
    <p v-if="invalidInput" class="text-yellow-500 text-sm ml-80">
      Please enter ur name !
    </p>

    <h1 class="enterName mt-10 ml-80 text-purple-600 text-lg">DATE</h1>
    <div class="mb-3 rounded-sm shadow p-2 ml-80 w-3/6 mt-2">
      <label class="label mx-3" for="date"></label>
      <input
        v-model="date"
        @blur="validating"
        placeholder="enter the date ..."
      />
    </div>
    <p v-if="invalidInput" class="text-yellow-500 text-sm ml-80">
      Please enter the date !
    </p>

    <h1 class="enterName mt-10 ml-80 text-purple-600 text-lg">The day is ?</h1>
    <div class="rounded-sm shadow p-2 ml-80 w-3/6 mt-2">
      <div class="pl-4">
        <input
          type="radio"
          name="day"
          id="sunday"
          value="sunday"
          v-model="day"
        />
        <label class="label pl-2 text-red-500" for="sunday">Sunday</label>
      </div>

      <div class="pl-4">
        <input
          type="radio"
          name="day"
          id="monday"
          value="monday"
          v-model="day"
        />
        <label class="label pl-2 text-yellow-400" for="monday">Monday</label>
      </div>

      <div class="pl-4">
        <input
          type="radio"
          name="day"
          id="tuesday"
          value="tuesday"
          v-model="day"
        />
        <label class="label pl-2 text-pink-500" for="tuesday">Tuesday</label>
      </div>

      <div class="pl-4">
        <input
          type="radio"
          name="day"
          id="wednesday"
          value="wednesday"
          v-model="day"
        />
        <label class="label pl-2 text-green-500" for="wednesday"
          >Wednesday</label
        >
      </div>

      <div class="pl-4">
        <input
          type="radio"
          name="day"
          id="thursday"
          value="thursday"
          v-model="day"
        />
        <label class="label pl-2 text-yellow-600" for="thursday"
          >Thursday</label
        >
      </div>

      <div class="pl-4">
        <input
          type="radio"
          name="day"
          id="friday"
          value="friday"
          v-model="day"
        />
        <label class="label pl-2 text-blue-400" for="friday">Friday</label>
      </div>

      <div class="pl-4">
        <input
          type="radio"
          name="day"
          id="saturday"
          value="saturday"
          v-model="day"
        />
        <label class="label pl-2 text-purple-700" for="saturday"
          >Saturday</label
        >
      </div>
    </div>
    <p
      v-if="invalidInput"
      @blur="validating"
      class="text-yellow-500 ml-80 text-sm pt-3"
    >
      Please choose the day !
    </p>

    <div class="ml-80 mt-10 text-purple-600 text-lg">Note...</div>
    <textarea
      placeholder="insert your note .."
      class="textArea border border-gray-300 rounded-sm shadow"
      type="text"
      v-model="note"
      ></textarea>
      
      <p v-if="invalidInput"
      @blur="validating"
      class="text-yellow-500 ml-80 text-sm pt-3"
    >Please enter ur note ...</p>

    <button class="btn" @click="validating">Submit</button>
  </form>

  <div class="w-full pt-20">
    <base-card
      ><h2
        class="font-semibold text-yellow-600 text-xl flex justify-center py-5"
      >
        TIMETABLE that has already been post :3
      </h2></base-card
    >
  </div>

  <div class="flex flex-wrap justify-center">
    <div
      class="container p-4 max-w-xs shadow rounded m-4"
      v-for="lists in Timetables"
      :key="lists.id"
    >
      <note-item
        :lists="lists"
        @click-edit="showData"
        @click-delete="deleteData"
      />
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      url: "http://localhost:5000/Timetables",
      note: "",
      name: "",
      date: "",
      day: null,
      invalidInput: false,
      Timetables: [],
    };
  },

  methods: {
    submitForm() {
      this.invalidInput = this.note === "" ? true : false;
      this.invalidInput = this.name === "" ? true : false;
      this.invalidInput = this.date === "" ? true : false;
      this.invalidInput = this.day === null ? true : false;

      if (
        this.note !== "" ||
        this.name !== "" ||
        this.date !== "" ||
        this.day !== null
      ) {
        if (this.isEdit) {
          this.editData({
            id: this.editId,
            note: this.note,
            name: this.name,
            date: this.date,
            day: this.day,
          });
        } else {
          this.addNewData({
            note: this.note,
            name: this.name,
            date: this.date,
            day: this.day,
          });
        }
      }
      this.note = "";
      this.datetime = "";
      this.name = "";
      this.date = "";
      this.day = null;
    },

    showData(oldData) {
      this.isEdit = true;
      this.editId = oldData.id;
      this.note = oldData.note;
      this.name = oldData.name;
      this.date = oldData.date;
      this.day = oldData.day;
    },

    validating() {
      this.invalidInput = this.note === "" ? true : false;
      this.invalidInput = this.name === "" ? true : false;
      this.invalidInput = this.date === "" ? true : false;
      this.invalidInput = this.day === null ? true : false;
    },

    addNewData(newData) {
      axios
        .post(this.url, {
          note: newData.note,
          name: newData.name,
          date: newData.date,
          day: newData.day,
        })
        .then((res) => {
          this.Timetables = [...this.Timetables, res.data];
          return res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getResult() {
      axios
        .get(this.url)
        .then((res) => {
          this.Timetables = res.data;
          return res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    editData(editingData) {
      axios
        .put(`${this.url}/${editingData.id}`, {
          note: editingData.note,
          name: editingData.name,
          date: editingData.date,
          day: editingData.day,
        })
        .catch((error) => {
          console.log(error);
        })
        .then((res) => {
          this.Timetables = this.Timetables.map((nb) =>
            nb.id === editingData.id
              ? {
                  ...nb,
                  note: res.data.note,
                  name: res.data.name,
                  date: res.data.date,
                  day: res.data.day,
                }
              : nb
          );
          this.isEdit = false;
          this.editId = "";
          this.note = "";
          this.name = "";
          this.date = "";
          this.day = null;
          return res.data;
        });
    },

    deleteData(id) {
      axios
        .delete(`${this.url}/${id}`)
        .then((res) => {
          return res.data;
        })
        .then(() => {
          this.Timetables = this.Timetables.filter((n) => n.id !== id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    this.Timetables = this.getResult();
  },
};
</script>
