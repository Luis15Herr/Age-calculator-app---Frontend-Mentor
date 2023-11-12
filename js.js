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

let meses = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

let actualDay = 12;
let actualMonth = 11;
let birthDay = 15;
let dayCounter = null;
let birthMonth = 5;
let stopDate = null;
let daysTranscurred = 0;
let monthsTranscurred = 0;

for (let index = birthMonth; index < actualMonth + 1; index++) {
  if (index === birthMonth) {
    console.log("una vez");
    dayCounter = birthDay;
  }
  monthsTranscurred++;

  stopDate = meses[index] + 1;
  if (index != birthMonth) {
    dayCounter = 1;
  } else {
    dayCounter = dayCounter + 1;
  }

  if (index === actualMonth) {
    stopDate = actualDay + 1;
    if (actualDay < birthDay) {
      monthsTranscurred--;
    }
  }

  for (let j = dayCounter; j < stopDate; j++) {
    daysTranscurred++;
  }
}
console.log(monthsTranscurred);
console.log(daysTranscurred);
