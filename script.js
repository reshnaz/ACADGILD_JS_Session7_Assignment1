var glbCount=100; //This is our global variable.

// Below function increments value of our global variable by 1.
function incrementCount() {
	glbCount+=1; // Function identifies the global variable and increments its value by 1.
	console.log("New value="+glbCount); // Printing its new value in console.
}

// Function call 1
incrementCount();

// Function call 2
incrementCount();

// Function call 3
incrementCount();