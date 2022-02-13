var x = prompt("give a number");
if (Number(x)) {

    while (x != 0 && x <= 100) {


        var y = prompt("give a number");
        if (y == 0) {
            break;
        } else {
            if (Number(y)) {
                y = parseInt(y);
                x = parseInt(x);

                x = x + y;
                alert(x);
            } else {
                alert("not a number");
                location.reload();
            }
        }

    }
} else {
    alert("not a number");
    location.reload();
}
alert(x);