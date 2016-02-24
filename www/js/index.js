var west = 270;
var south = 180;
var east = 90;
var offSet = 5;

document.addEventListener("deviceready", function () {
    // start animating
    if (window.DeviceOrientationEvent) {

        startCompass();
    } else {
        document.write("This application is NOT supported by your Device");
    }
}, false);

function startCompass() {
    window.addEventListener('deviceorientation', function (eventData) {
        //need to convert from degrees to radian because that is what pixi uses to rotate img.
        //Convert to radian like this (heading.magneticHeading)/57.2958)

        // gamma is the left-to-right tilt in degrees, where right is positive
        //eventData.gamma;

        if (eventData.alpha <= offSet && eventData.alpha >= 360 - offSet) {//North
            document.getElementById("heading").innerHTML = "North";
        } else if (eventData.alpha < 360 - offSet && eventData.alpha > west + offSet) {//NE
            document.getElementById("heading").innerHTML = "NE";
        } else if (eventData.alpha <= west + offSet && eventData.alpha >= west - offSet) {//West
            document.getElementById("heading").innerHTML = "West";
        } else if (eventData.alpha < west - offSet && eventData.alpha > south + offSet) {//SE
            document.getElementById("heading").innerHTML = "SE";
        } else if (eventData.alpha <= south + offSet && eventData.alpha >= south - offSet) {//South
            document.getElementById("heading").innerHTML = "South";
        } else if (eventData.alpha < south - offSet && eventData.alpha > east + offSet) {//SW
            document.getElementById("heading").innerHTML = "SW";
        } else if (eventData.alpha <= east + offSet && eventData.alpha >= east - offSet) {//East
            document.getElementById("heading").innerHTML = "East";
        } else if (eventData.alpha < east - offSet && eventData.alpha > offSet) {//NW
            document.getElementById("heading").innerHTML = "NW";
        }

        document.getElementById("alpha").innerHTML = eventData.alpha;

        // beta is the front-to-back tilt in degrees, where front is positive

        // alpha is the compass direction the device is facing in degrees

        // Code for Chrome, Safari, Opera
        document.getElementById("compass").style.WebkitTransform = "rotate(" + eventData.alpha + "deg)";
        // Code for IE9
        document.getElementById("compass").style.msTransform = "rotate(" + eventData.alpha + "deg)";
        // Standard syntax
        document.getElementById("compass").style.transform = "rotate(" + eventData.alpha + "deg)";

    }, false);
}