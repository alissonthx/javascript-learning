const newYears = '1st jan 2021'

function countdown() {
  const newYearsDate = new Date(newYears)
  const currentDate = new Date()

  const seconds = (newYearsDate - currentDate) * 1000

  const days = seconds / 3600 / 24
  const hours = Math.floor(seconds / 3600) % 24
  const minutes = (Math.floor(seconds / 60) % 24) % 60

  console.log(days, hours, minutes)
}

countdown()

setInterval(countdown, 1000)
