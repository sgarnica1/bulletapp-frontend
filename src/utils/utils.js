
function formatHour(hour) {
  let time = {};
  let timeValues = hour.split(":");

  timeValues = timeValues.map((value) =>
    parseInt(value) !== 0 ? parseInt(value) : value
  );

  time.hour = timeValues[0];
  time.minutes = timeValues[1];

  if (time.hour === 12) return `12:${time.minutes}pm`;
  if (time.hour === 24) return `12:${time.minutes}am`;
  if (time.hour < 12) return `${time.hour}:${time.minutes}am`;

  if (time.hour > 12) {
    let hour = (time.hour - 12).toString().split("");
    if (hour.length > 1) return `${hour[0]}${hour[1]}:${time.minutes}pm`;
    return `${hour[0]}:${time.minutes}pm`;
  }
}

function formatDate(date) {
  const newDate = new Date(date);

  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;

  return `${day}/${month}/${year}`;
}

function formatCurrency(number) {
  number = parseFloat(number);

  let formattedCurrency = new Intl.NumberFormat("en-US");
  return `$${formattedCurrency.format(number)}`;
}

function updateAthletes(data, setData) {
  const updatedAthletes = data.map((athlete) => {
    athlete.created = formatDate(athlete.created);

    const getSchedule = fetch(athlete.schedule)
      .then((response) => {
        if (response.ok) return response.json();
        throw Error("Cannot fetch");
      })
      .then((data) => {
        const hour = formatHour(data.hour);
        athlete.schedule = hour;
      });

    const getPlan = fetch(athlete.plan)
      .then((response) => {
        if (response.ok) return response.json();
        throw Error("Cannot fetch");
      })
      .then((data) => (athlete.plan = data.name));

    return Promise.all([getSchedule, getPlan]).then(() => athlete);
  });
  Promise.all(updatedAthletes).then((athletes) => setData(athletes));
}

function updatePayments(data, setData) {
  const updatedPayments = data.map((payment) => {
    payment.date = formatDate(payment.date);

    const getAthlete = fetch(payment.athlete)
      .then((response) => {
        if (response.ok) return response.json();
        throw Error("Cannot fetch");
      })
      .then(
        (data) => (payment.athlete = `${data.first_name} ${data.last_name}`)
      );

    const getPlan = fetch(payment.plan)
      .then((response) => {
        if (response.ok) return response.json();
        throw Error("Cannot fetch");
      })
      .then((data) => (payment.plan = data.name));

    return Promise.all([getAthlete, getPlan]).then(() => payment);
  });
  Promise.all(updatedPayments).then((payments) => setData(payments));
}

export { formatHour, formatCurrency, updateAthletes, updatePayments };
