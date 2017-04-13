window.onload = function () {
    var canvas = document.querySelector("canvas")
    var context = canvas.getContext("2d")

    var tools = document.querySelectorAll("input")
    tools.forEach(function (tool) {
        tool.onclick = function() {
            currentTool = this.value
            console.log(currentTool)
        }
    })

    for (var i = 0, length = tools.length; i < length; i++) {
    if (tools[i].checked) {
        // do whatever you want with the checked radio
        console.log(tools[i].value);
        break; // only one can be checked
    }
}

}

    // // let's also get a handle to our colour picker
    // var colourPicker = document.querySelector("input")
    // colourPicker.onchange = function () {
    //     context.strokeStyle = this.value
    // }

    // canvas.onclick = function (event) {
    //     drawCircle(event.x, event.y)
    // }



    // var drawCircle = function (x, y) {
    //     context.beginPath()
    //     context.arc(x, y, 50, 0, 2 * Math.PI);
    //     context.stroke()
    // }
    
    // // let's totally draw a filled Wrecked Angel
    // // the TOP LEFT is 0, 0; we work down and right
    // context.fillRect(10, 10, 50, 50)  // (startpoint_x, startpoint_y, width, height)

    // // here's an outlined Wrecked Angel
    // context.strokeRect(60, 60, 50, 50)

    // // we can draw lines
    // context.beginPath()
    // context.moveTo(110, 110) // (x, y)
    // context.lineTo(200, 200)
    // context.stroke()

    // // let's draw a Three-Sided Polygon
    // context.beginPath()
    // context.moveTo(200, 200)
    // context.lineTo(200, 300)
    // context.lineTo(100, 300)
    // context.closePath()
    // context.stroke()

    // // let's totes draw a CIRCLE!!!!!!!!!!!!
    // context.beginPath()
    // context.arc(200, 200, 80, 0, 2 * Math.PI); // (centre_x, centre_y, radius, start_angle (in radians; use 0), end_angle (in radians; use 2 * Math.PI for full circle, or Math.PI for a semicircle))
    // context.stroke()

    // // let's put an IMAGE in there
    // var img = document.createElement("img")
    // img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Chicken_Pie.JPG/438px-Chicken_Pie.JPG"
    // // we need a callback because we need to wait for the image to load
    // img.onload = function () {
    //     context.drawImage(img, 200, 200, 300, 300)
    // }