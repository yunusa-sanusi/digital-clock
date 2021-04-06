const months = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
 ];
 const weekdays = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
 ];


const date = document.querySelector(".date");
const time = document.querySelector(".time");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

document.addEventListener("DOMContentLoaded", () => {
   getCurrentDate();
   setInterval(getTime, 1000);
});


function getCurrentDate() {
   const dateObj = new Date();
   const currentYear = dateObj.getFullYear();
   let currentMonth = dateObj.getMonth();
   let currentDate = dateObj.getDate();
   let dayOfWeek = dateObj.getDay();

   months.forEach(month => {
      if (currentMonth === months.indexOf(month)) {
         currentMonth = month;
      }
   });

   weekdays.forEach(day => {
      if (dayOfWeek === weekdays.indexOf(day)) {
         dayOfWeek = day;
      }   
   });


   const content = `${dayOfWeek}, ${currentMonth} ${currentDate}, ${currentYear}`;
   date.textContent = content;
   
}


function getTime() {
   const dateObj = new Date();

   let setHour = dateObj.getHours();
   let setMinute = dateObj.getMinutes();
   let setSecond = dateObj.getSeconds();

   if (setSecond < 10) {
      setSecond = "0" + setSecond;
   }

   if (setMinute < 10) {
      setMinute = "0" + setMinute;
   }

   if (setHour < 10) {
      setHour = "0" + setHour;
   }

   const content = setHour < 12 ? time.textContent = `${setHour}:${setMinute}:${setSecond} AM` : time.textContent = `${setHour}:${setMinute}:${setSecond} PM`;
   
   time.textContent = content;
}