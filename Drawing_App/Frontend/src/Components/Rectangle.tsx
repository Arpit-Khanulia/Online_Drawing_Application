import React, { useState } from "react";
import { Stage, Layer, Rect } from "react-konva";

interface Annotation {
  x: number;
  y: number;
  width: number;
  height: number;
  key: string;
}

const Rectangle: React.FC = () => {
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [newAnnotation, setNewAnnotation] = useState<Annotation[]>([]);

  const handleMouseDown = (event: any) => {
    if (newAnnotation.length === 0) {
      const { x, y } = event.target.getStage().getPointerPosition();
      setNewAnnotation([{ x, y, width: 0, height: 0, key: "0" }]);
    }
  };

  const handleMouseUp = (event: any) => {
    if (newAnnotation.length === 1) {
      const sx = newAnnotation[0].x;
      const sy = newAnnotation[0].y;
      const { x, y } = event.target.getStage().getPointerPosition();
      const annotationToAdd: Annotation = {
        x: sx,
        y: sy,
        width: x - sx,
        height: y - sy,
        key: (annotations.length + 1).toString()
      };
      setAnnotations([...annotations, annotationToAdd]);
      setNewAnnotation([]);
    }
  };

  const handleMouseMove = (event: any) => {
    if (newAnnotation.length === 1) {
      const sx = newAnnotation[0].x;
      const sy = newAnnotation[0].y;
      const { x, y } = event.target.getStage().getPointerPosition();
      setNewAnnotation([
        {
          x: sx,
          y: sy,
          width: x - sx,
          height: y - sy,
          key: "0"
        }
      ]);
    }
  };

  const annotationsToDraw = [...annotations, ...newAnnotation];
  return (
    <Stage
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      width={window.innerWidth}
      height={window.innerHeight}
    >
      <Layer>
        {annotationsToDraw.map((value, index) => (
          <Rect
            key={index}
            x={value.x}
            y={value.y}
            width={value.width}
            height={value.height}
            fill="transparent"
            stroke="#df4b26"
            strokeWidth={5}
            tension={0.5}
            lineCap="round"
            lineJoin="round"
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default Rectangle
