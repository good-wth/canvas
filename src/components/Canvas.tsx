import { useState } from 'react';
import { Stage, Layer, Shape } from 'react-konva';

interface State {
    isDragging: boolean,
    x: number,
    y: number
}

function Canvas() {
    const [smt, setSmt] = useState<State>({
        isDragging: false,
        x: 50,
        y: 50
    })

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Shape
                    width={100}
                    height={100}
                    x={smt.x}
                    y={smt.y}
                    draggable
                    onDragStart={(e) => {
                        setSmt({
                            isDragging: true,
                            x: e.target.x(),
                            y: e.target.y(),
                        });
                    }}
                    onDragEnd={(e) => {
                        setSmt({
                            isDragging: false,
                            x: e.target.x(),
                            y: e.target.y(),
                        });
                    }}
                    sceneFunc={(context, shape) => {
                        context.beginPath();
                        context.rect(0, 0, shape.getAttr('width'), shape.getAttr('height'));
                        context.rect(40, 40, shape.getAttr('width'), shape.getAttr('height'));
                        context.closePath();
                        // (!) Konva specific method, it is very important
                        context.fillStrokeShape(shape);
                    }}
                    fill="rgb(200, 0, 0)"
                    stroke='rgba(0, 0, 200, 0.5)'
                    strokeWidth={4}
                />

            </Layer>
        </Stage>
    )
}

export default Canvas