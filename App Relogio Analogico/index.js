const grau = 6
const hr = document.querySelector("#hr")
const min = document.querySelector("#min")
const seg = document.querySelector("#seg")

setInterval(() => {
  const date = new Date()
  const hh = date.getHours() * 30
  const mm = date.getMinutes() * grau
  const ss = date.getSeconds() * grau

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`
  min.style.transform = `rotateZ(${mm}deg)`
  seg.style.transform = `rotateZ(${ss}deg)`
})
