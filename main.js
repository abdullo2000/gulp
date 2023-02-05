
function logInfo(name, age, gender) {
    return console.log(`Name: ${name},\nAge: ${age},\nGender: ${gender}`);
}

// console.log(logInfo("Xabijon", 19, "erkak")); 

document.body.innerHTML = "<pre>" + logInfo("Xabijon", 19, "erkak") + "</pre>";