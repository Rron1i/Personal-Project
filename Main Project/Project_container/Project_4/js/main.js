var button = document.getElementById("btn1")
var result = document.getElementById("counter")

btn1.onclick = function(){
    const delay = 100; // Delay in milliseconds
    let i = 0; // Start counter

    btn1.disabled = true;

    function iterate() {
        if (i < 100000000000000) { // Continue until i reaches 1,000,000
            result.value = i; // Update the result
            i++; // Increment i
            setTimeout(iterate, delay); // Schedule the next iteration
        } else {
            console.log("Loop complete!"); // Log when done
            btn1.disabled = false
        }
    }

    iterate(); 
}