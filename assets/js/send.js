function sendEmail() {
    var sub = document.getElementById("subject").value ,
        body = document.getElementById("body").value ,
        nam = document.getElementById("name").value , 
        ema = document.getElementById("email").value ;
    Email.send({
        Host: "smtp.gmail.com",
        Username : "elrabeana@gmail.com",
        Password : "aab01113284597",
        To : 'ahmedabubakr148@gmail.com',
        From : "elrabeana@gmail.com",
        Subject : sub,
        Body : nam + " wanted to contact you " + "<br>and his email is <a href='mailto:" + ema + "'>" + ema + '</a> <br>and he said ' + body,
    })
    .then(function(message){
        alert("mail sent successfully")
    });
}