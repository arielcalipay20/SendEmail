function sendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_eux0ioj", "template_v8us48r", params).then(function (res){
        alert("Success! " + res.status);
    })
}

let buttonEl = document.getElementById("send");
buttonEl.addEventListener("click", sendMail);