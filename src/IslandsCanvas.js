import React from "react";
import "./IslandsCanvas.css"

function Canvas(props) {

    const canvasRef = React.useRef(null);
    const { matrix, draw, width, height } = props;
    const MAX_IMAGE_SIZE = 40000;

    //console.log(matrix, "props")
    React.useEffect(() => {
        let p;
        if ((width * height) < MAX_IMAGE_SIZE)
            p = 20;
        else {
            p = Math.ceil(20 * (MAX_IMAGE_SIZE / (width * height)));
        }

        console.log("p w h", p, width, height);
        if (!canvasRef)
            return

        const rows = height;
        const cols = width;

        const context = canvasRef.current.getContext('2d')
        context.clearRect(0, 0, width * p, height * p);
        context.canvas.width = cols * p;
        context.canvas.height = rows * p;
        context.rect(0, 0, width * p, height * p);
        let x, y;

        const colors = ["black", "yellow", "red", "lightblue", "pink", "brown", "orange", "lightskyblue", "magenta", "blue"]
        for (let j = 0; j < draw.length; j++) {
            let drawIsland = draw[j];
            context.fillStyle = colors[j % 10];

            for (let i = 0; i < drawIsland.length; i++) {
                x = drawIsland[i].col;
                y = drawIsland[i].row;
                context.fillRect(x * p, y * p, p, p);
            }
        }
        context.strokeStyle = "black";
        context.stroke();

    }, [matrix, draw, height, width]);


    return (
        <div className="canvas-att">
            <canvas ref={canvasRef} />
        </div>)

}

export default Canvas
