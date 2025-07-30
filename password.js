let password = "189271";
let trueunlock = true
function passcodeprotect() {
    let passcode = prompt("Enter PassCode. Type \" cancel \" to end login session ");
    while (passcode !== password) {
        if (passcode == "cancel") {
            alert("Canceling Login")
            trueunlock = false
            break
        } else {
        alert("Incorrect PassCode");
        return passcodeprotect();
        }
    }
    unlock()
};
function unlock() {
    if (trueunlock == true) {
    alert('Falix Panel Unlocked');
    window.open("https://client.falixnodes.net/server/console")
    }
}

document.getElementById("loginbtn").onclick = function() {passcodeprotect()};

