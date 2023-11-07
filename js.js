const { createApp, ref, computed } = Vue;

Vue.createApp({
  setup() {
    const day = ref();
    const month = ref();
    const year = ref();
    const actualDate = new Date();
    const calcMonth = computed(() => actualDate.getMonth() + 1 - month.value);
    const calcYear = computed(() => actualDate.getFullYear() - year.value);
    const showDay = actualDate.getDate();
    return {
      day,
      month,
      year,
      actualDate,
      calcYear,
      calcMonth,
      showDay,
    };
  },
}).mount("#app");
