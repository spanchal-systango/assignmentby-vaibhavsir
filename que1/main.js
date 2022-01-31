let currentDate;
let selected = 1;

let days = ["Sunday", "Monday", "Tuesday", "Wednessday", "Friday", "Saturday"];
let months = ["January", "February","March","April","May","June","July","August","September","October","November","December"];

let headText = document.getElementById("headText");

setInterval(function () {
	let currentDate = new Date();
	let resString = "";

	if(selected == 1){
		// Fri, Aug 20, 2021, 05:32 PM
		resString = `${days[currentDate.getDay()].slice(0,3)}, ${months[currentDate.getMonth()].slice(0,3)} ${currentDate.getDate()} ${currentDate.getFullYear()}, ${currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
		// resString = `${days[currentDate.getDay()].slice(0,3)}, `
		
	}
	else if(selected == 2){
		// 11:50 AM, Monday, 24 January 2022
		resString = `${currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}, ${days[currentDate.getDay()]}, ${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`

	}
	else{
		// 25/11/2021 11:50 AM
		resString = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()} ${currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`

	}

	headText.innerText = resString;

}, 1000);

function selectFormat(x){
	selected = x;
}
