// Init random number between 0 - 1000
var number = Math.floor(Math.random() * 1000);
var turn = 10;

function myFunction() {
    if (turn > 0) {
        turn--;
        let val = document.getElementById('data').value;
        if (val == number) {
            document.getElementById('message').innerHTML = "CONGRATULATION!!";
            document.getElementById('message').style.background = '#53AF51';
            setTimeout(
                function () {
                    alert('YOU WIN!!!');
                    location.reload();
                },
                2000
            );
            return;
        }
        if (val > number) {
            document.getElementById('message').innerHTML = "TOO HIGH!! You only have " + turn + " times";
        }
        else {
            document.getElementById('message').innerHTML = "TOO LOW!! You only have " + turn + " times";
        }
    }
    if (turn == 0) {
        alert('YOU LOSE!!!');
        location.reload();
    }
}