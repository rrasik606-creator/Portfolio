function sendMail(event){
    event.preventDefault();
    var contact ={
        name:document.getElementById("name").value,
        email:document.getElementById("mail").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,

    }
    const seviceID="service_zht8ewv";
    const templateID="template_1f8266k";

emailjs.send(seviceID,templateID,contact)
.then(
    res =>{
        document.getElementById("name").value="";
        document.getElementById("mail").value="";
        document.getElementById("subject").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message send successfully");
    })
    .catch(err=>console.log(err));
}
