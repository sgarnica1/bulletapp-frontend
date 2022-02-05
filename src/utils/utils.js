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

function updateAthletes(data, setData) {
  const updatedAthletes = data.map((athlete) => {
    const getSchedule = fetch(athlete.schedule)
      .then((response) => response.json())
      .then((data) => {
        const hour = formatHour(data.hour);
        athlete.schedule = hour;
      });

    const getPlan = fetch(athlete.plan)
      .then((response) => response.json())
      .then((data) => (athlete.plan = data.name));

    return Promise.all([getSchedule, getPlan]).then(() => athlete);
  });
  Promise.all(updatedAthletes).then((athletes) => setData(athletes));
}

export { formatHour, updateAthletes };
