var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// loop through to apply alert to each button
for (var i = 0; i < numberOfDrumButtons; i++) {

    // add event listener to each button
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        alert("I got clicked!");

    });
}