// Check Driver


// var age = prompt("What is your age?");

// if (Number(age) < 18) {
// 	alert("Sorry, you are too young todrive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering on.  Ejoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congras on your first year of driving.");
// }


// function checkDriverAge() {
// 	var age = prompt("What is your age?");
// 	if (Number(age) < 18) {
// 		alert("Sorry, you are too young todrive this car. Powering off");
// 	} else if (Number(age) > 18) {
// 		alert("Powering on.  Ejoy the ride!");
// 	} else if (Number(age) === 18) {
// 		alert("Congras on your first year of driving.");
// 	}
// }

// var checkDriverAge = function() {
// 	var age = prompt("What is your age?");
// 	if (Number(age) < 18) {
// 		alert("Sorry, you are too young todrive this car. Powering off");
// 	} else if (Number(age) > 18) {
// 		alert("Powering on.  Ejoy the ride!");
// 	} else if (Number(age) === 18) {
// 		alert("Congras on your first year of driving.");
// 	}
// }

function checkDriverAge(age) {
	if (Number(age) < 18) {
		return console.log(("Sorry, you are too young todrive this car. Powering off"));
	} else if (Number(age) > 18) {
		return console.log(("Powering on.  Ejoy the ride!"));
	} else if (Number(age) === 18) {
		return console.log(("Congras on your first year of driving."));
	}
}


