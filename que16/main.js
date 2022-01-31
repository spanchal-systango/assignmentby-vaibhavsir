
let inp = document.getElementById("inp");
let result = document.getElementById("result");
let summ = 0;
let salaries = [];


function AddElement(){
	let salaryList = document.getElementById("salaryList");
	// alert(salaryList);

	salaryList.innerHTML = salaryList.innerHTML+`<li>${inp.value}</li>`;
	salaries.push(parseInt(inp.value));	
}


function SumAll(){
	summ = 0;
	for (let value of salaries) {
        summ = summ + value;
    }

	result.innerText = "Total sum - "+summ;

}
