// setTimeOut


var a = setTimeout(function xyz() {
    console.log("skjdjh")
    console.log(xyz);

}, 3000);

// Increment, Decrement functions with Constructor


function NewFunction() {
    var count = 100;
    this.incrementFunction = function () {
        count++;
        console.log(count);
    }

    this.decrementFunction = function () {
        count--;
        console.log(count);
    }
}


var increment = new NewFunction();
increment.incrementFunction();

var decrement = new NewFunction();
decrement.decrementFunction();






//  Show Date in HTML Page

function showDate() {
    var dateCurrent = new Date().toLocaleTimeString();
    return dateCurrent;
}

function clickButtonToShowDate() {
    document.getElementById("paraDate").innerHTML = "Current Date is " + showDate();
}

// change button color by clicking


function changeColor() {
    document.getElementById("thirdDate").style.background = 'red';
    document.getElementById("thirdDate").style.color = 'white';
    document.getElementById("thirdDate").style.border = 'none';
    document.getElementById("thirdDate").style.borderRadius = '10px';

}


function changeTextStyle() {
    document.getElementById("h1").style.fontFamily = "verdana";
}



// area of circle


function areaofCircle() {
    var r = document.getElementById("value").value;
    document.getElementById("paraArea").innerHTML = "the area of circle is " + Math.PI * r * r;
}




// AnimationButton

function toptobottom() {

    var id = null;
    function animationButtonTop() {

        var elem = document.getElementById("myAnimation");
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 1);
        function frame() {
            if (pos == 651) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }

    animationButtonTop();
}



function bottomToTop() {
    var id = null;
    function animationButtonBottom() {
        var elem = document.getElementById("myAnimation");
        var pos = 651;
        clearInterval(id);
        id = setInterval(frame, 1);
        function frame() {
            if (pos == 651) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.bottom = pos + 'px';
                elem.style.right = pos + 'px';
            }
        }
    }
    animationButtonBottom();
}