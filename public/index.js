window.onload = function () {
    var canvas = document.querySelector("canvas")
    var context = canvas.getContext("2d")
    var currentTool

    var tools = document.querySelectorAll("input")
        tools.forEach(function (tool) {
        tool.onclick = function() {
            currentTool = this.value
            canvas.onclick = canvasClickHandler // it works, but..?
        }
    })

    // determine which tool is selected
    for (var i = 0, length = tools.length; i < length; i++) {
        if (tools[i].checked) {
            currentTool = tools[i].value
            break
        }
    }

    var img = document.createElement("img")
    img.src = "lobster4.jpg"

    var canvasClickHandler = function (event) {
        switch (currentTool) {
        case "line":
            drawLineStart(event.x, event.y)
            canvas.onclick = function (event) {
                drawLineEnd(event.x, event.y)
                canvas.onclick = canvasClickHandler
            }
            break

        case "circle":
            drawCircle(event.x, event.y)
            break
        case "square":
            drawSquare(event.x,event.y)
            break
        case "hungrygerald":
            drawImg(event.x,event.y)
        }
    }

    canvas.onclick = canvasClickHandler

    var drawLineStart = function (x, y) {
        context.beginPath()
        context.moveTo(x, y) 
    }

    var drawLineEnd = function (x, y) {
        context.lineTo(x, y)
        context.stroke()
    }

    var drawCircle = function (x, y) {
        context.beginPath()
        context.arc(x, y, 25, 0, 2 * Math.PI);
        context.stroke()
    }

    var drawSquare = function(x,y){
        size = 50
        context.strokeRect(x-size/2,y-size/2,size,size)
    }

    var drawImg = function(x, y) {
        context.drawImage(img, x-100, y-75, 200, 150)
    }

}
