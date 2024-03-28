const inputs = document.querySelectorAll("input"),
    button = document.querySelector("button");

// console.log(inputs,button);

//iterate over all inputs
inputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
        //this code gets the curr element and stores it in the current input variable
        //this code gets the next sibling  element of the current input element  and stores it in the next input variable
        //this code gets the previous sibling element of the current input element and stores it in the prev input variable
        const currentInput = input,
            nextInput = input.nextElementSibling,
            prevInput = input.previousElementSibling;

        // if value has more than one character clear it
        if (currentInput.value.length > 1) {
            currentInput.value = "";
            return;
        }

        // if the next input is diasabled and current value is not empty enable and focus on it
        if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }
        //if the backspace key is pressed
        if (e.key === "Backspace") {
            //iterate over all inputs again
            inputs.forEach((input, index2) => {
                //if the index1 of current eleemnt is less than or equal to index2 of the input in the outer loop and the prev element exists set the disabled attribute on the input and focus on the prev element 

                if (index1 <= index2 && prevInput) {
                    input.setAttribute("disabled", true);
                    currentInput.value = "";
                    prevInput.focus();
                }
            });
        }

        //if the fourth element is not empty and has not disable attribute then add active class if not then remove the active class
        if (!inputs[3].disabled && inputs[3].value !== "") {
            button.classList.add("active");
            return;
        }
        button.classList.remove("active");

    });
});



//focus the first input which indes is 0 on window load
window.addEventListener("load", () => inputs[0].focus());