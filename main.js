
function logInfo(name, age, gender) {
    return `Name: ${name},\nAge: ${age},\nGender: ${gender}`;
}

document.body.innerHTML = "<pre>" + logInfo("Xabijon", 19, "erkak") + "</pre>";