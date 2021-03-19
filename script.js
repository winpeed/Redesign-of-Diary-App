let submitButton = document.getElementById("submit-btn");

let textNote = document.getElementById("text-note");

let itemDiv = document.getElementById("item-div");

let contentDiv = document.createElement("div");

contentDiv.classList.add("saved-items");

let count = 1;


textNote.addEventListener("mouseover",function(){
    textNote.placeholder = "";
})


textNote.addEventListener("click",function(){
    textNote.placeholder = "";
})


textNote.addEventListener("mouseout",function(){
    textNote.placeholder = "Enter your notes";
})


submitButton.addEventListener("click",function(e){
	e.preventDefault();
})


submitButton.addEventListener("focus", function(){

	submitButton.style.border = "2px solid #079992";
	submitButton.style.outline = "none";

})




submitButton.addEventListener("click", function(){
	
	if(textNote.value !== "") {

	let contentDiv = document.createElement("div");

	let numberButton = document.createElement("button");

	numberButton.classList.add("number-button");

	

	let deleteButton = document.createElement("button");

	deleteButton.classList.add("delete-button");

	deleteButton.textContent = "Delete";


	
	numberButton.textContent = count;

	contentDiv.classList.add("saved-items");

	let paraDiv = document.createElement("p");
	

	contentDiv.append(numberButton);
	
	contentDiv.append(paraDiv);

	contentDiv.append(deleteButton);


	
	paraDiv.textContent = textNote.value;

	itemDiv.append(contentDiv);

	textNote.value = "";

	count++;
	

	function deleteParent() {

	deleteButton.parentElement.remove();
	
	}


	deleteButton.addEventListener("click", deleteParent);

	}	
		
})




