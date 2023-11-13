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
  1: { size: 31, name: "enero" },
  2: { size: 28, name: "febrero" },
  3: { size: 31, name: "marzo" },
  4: { size: 30, name: "abril" },
  5: { size: 31, name: "mayo" },
  6: { size: 30, name: "junio" },
  7: { size: 31, name: "julio" },
  8: { size: 31, name: "agosto" },
  9: { size: 30, name: "septiembre" },
  10: { size: 31, name: "octubre" },
  11: { size: 30, name: "noviembre" },
  12: { size: 31, name: "diciembre" },
};

let actualDay = 12;
let actualMonth = 11;
let birthDay = 15;
let dayCounter = null;
let birthMonth = 5;
let stopDate = null;
let daysTranscurred = 0;
let monthsTranscurred = 0;

let daysAway = null;

for (let index = birthMonth; index < actualMonth + 1; index++) {
  if (index === birthMonth) {
    dayCounter = birthDay;
  }
  monthsTranscurred++;

  stopDate = meses[index].size + 1;
  if (index != birthMonth) {
    dayCounter = 1;
  } else {
    dayCounter = dayCounter + 1;
  }
  console.log(monthsTranscurred, meses[index].name);

  if (index === actualMonth) {
    stopDate = actualDay + 1;
    if (actualDay < birthDay) {
      monthsTranscurred--;
    }
  }
  daysTranscurred = 0;
  for (let j = dayCounter; j < stopDate; j++) {
    daysTranscurred++;
  }
  if (daysTranscurred < meses[index].size) {
    daysAway += daysTranscurred;
  }
}
if (daysTranscurred < meses[actualMonth].size) {
  monthsTranscurred--;
}
console.log(meses[actualMonth].size);
if (daysAway >= 30) {
  daysAway = 0;
}
console.log(daysAway);
console.log("Son los meses pasados", monthsTranscurred);
console.log("Son los dias pasados", daysAway);
