const { createApp, ref, computed } = Vue;

Vue.createApp({
  setup() {
    /* const day = ref();
    const month = ref();
    const year = ref();
    const calcMonth = computed(() => actualDate.getMonth() + 1 - month.value);
    const calcYear = computed(() => actualDate.getFullYear() - year.value);
    const showDay = actualDate.getDate(); */
    const actualDate = new Date();
    let birthDay = ref();
    let birthMonth = ref();
    let actualDay = actualDate.getDate();
    let actualMonth = actualDate.getMonth() + 1;
    let dayCounter = null;
    let stopDate = null;
    let daysAway = null;
    let daysTranscurred = ref(0);
    let monthsTranscurred = ref(0);
    let months = {
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

    let calc = function () {
      for (let index = birthMonth.value; index < actualMonth + 1; index++) {
        if (index === birthMonth.value) {
          dayCounter = birthDay.value;
        }
        monthsTranscurred.value++;

        stopDate = months[index].size + 1;
        console.log(stopDate);
        if (index != birthMonth.value) {
          dayCounter = 1;
        } else {
          dayCounter = dayCounter + 1;
        }
        console.log(monthsTranscurred.value, months[index].name);

        if (index === actualMonth) {
          stopDate = actualDay + 1;
          if (actualDay < birthDay.value) {
            monthsTranscurred.value--;
          }
        }
        daysTranscurred.value = 0;
        for (let j = dayCounter; j < stopDate; j++) {
          daysTranscurred.value++;
          console.log("undia");
        }
        if (daysTranscurred.value < months[index].size) {
          daysAway += daysTranscurred.value;
        }
      }
      if (daysTranscurred.value < months[actualMonth].size) {
        monthsTranscurred.value--;
      }
      console.log("tamaño del mes ", months[actualMonth].size);
      if (daysAway >= 30) {
        daysAway = 0;
      }
      console.log(daysAway);
      console.log("Son los meses pasados", monthsTranscurred.value);
      console.log("Son los dias pasados", daysAway);
    };
    return {
      /*   day,
      month,
      year,
      actualDate,
      calcYear,
      calcMonth,
      showDay, */
      months,
      birthDay,
      birthMonth,
      actualDay,
      actualMonth,
      dayCounter,
      stopDate,
      daysTranscurred,
      monthsTranscurred,
      daysAway,
      calc,
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

let actualDay = 15;
let actualMonth = 11;
let birthDay = 16;
let birthMonth = 10;
let dayCounter = null;
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
