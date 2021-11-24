const now = new Date();
const dateTime = document.querySelectorAll('span');
for (let i = 0; i < dateTime.length; i += 1) {
  dateTime[i].innerHTML = now.toString();
}
dateTime.innerHTML = now.toString();