function change() {
    let register = document.getElementById("reg");
    let login = document.getElementById("log");
    register.style.display = 'none';
    login.style.display = 'block';
}
function change1() {
    let register = document.getElementById("reg");
    let login = document.getElementById("log");
    register.style.display = 'block';
    login.style.display = 'none';
}
function registration() {

    let password = document.querySelector('.password').value;
    let confirm = document.querySelector('.confirm').value;
    if (password == confirm) {
        // alert("Successfully Registered");
        let name = document.querySelector('.name').value;
        let email = document.querySelector('.email').value;
        let phone = document.querySelector('.phone').value;
        console.log(name, email, phone);
    } else {
        document.getElementById("message").style.display = 'block';
        console.log("Wrong Value");
    }


}
