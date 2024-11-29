import {useEffect, useRef} from 'react';
import './App.css';
import './board.css';


function App() {
    // 横线数量
    const horizontalLine = 10;
    // 竖线数量
    const verticalLine = 9;
    const W = 60;

    const canvasRef = useRef(null);

    const width = W * verticalLine;
    const height = W * horizontalLine;



    const drawBoard = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle='#E4A751';
        ctx.fillRect(0, 0, width, height);


        // 画横线
        for (let i = 0; i < horizontalLine; i++) {
            drawLine(0,i,verticalLine-1,i,ctx)
        }
        // 画竖线
        for (let j = 0; j < verticalLine; j++) {
            if(j===0||j===verticalLine-1){
                drawLine(j,0,j,verticalLine,ctx,)
            }else{
                drawLine(j,0,j,(verticalLine-1)/2,ctx,);
                drawLine(j,(verticalLine-1)/2+1,j,verticalLine,ctx,)
            }
        }

        const temp=(width-W)/8;
        // 画\
        drawDiagonalLine(3*temp+W/2,W/2,5*temp+W/2,W/2+2*W,ctx);
        drawDiagonalLine(3*temp+W/2,W/2+7*W,5*temp+W/2,W/2+9*W,ctx);
        // 画/
        drawDiagonalLine(5*temp+W/2,W/2,3*temp+W/2,W/2+2*W,ctx);
        drawDiagonalLine(5*temp+W/2,W/2+7*W,3*temp+W/2,W/2+9*W,ctx);

        for (let j = 0; j < verticalLine; j++) {
            if(j===1||j===7){
                drawRice(j*temp+W/2,W/2+2*W,ctx);
            }
        }
        for (let j = 0; j < verticalLine; j++) {
            if(j===2||j===4||j===6){
                drawRice(j*temp+W/2,W/2+3*W,ctx);
            }
        }
        for (let j = 0; j < verticalLine; j++) {
            if(j===2||j===4||j===6){
                drawRice(j*temp+W/2,W/2+6*W,ctx);
            }
        }
        for (let j = 0; j < verticalLine; j++) {
            if(j===1||j===7){
                drawRice(j*temp+W/2,W/2+7*W,ctx);
            }
        }

        drawRiceRight(W/2,W/2+3*W,ctx);
        drawRiceRight(W/2,W/2+6*W,ctx);

        drawRiceLeft(W/2+(verticalLine-1)*temp,W/2+3*W,ctx);
        drawRiceLeft(W/2+(verticalLine-1)*temp,W/2+6*W,ctx);

        ctx.fillStyle = '#000000';
        ctx.font="30px Microsoft YaHei";
        ctx.fillText("楚河",2*temp-W/5,5*temp+W/5);
        ctx.fillText("汉界",6*temp-W/5,5*temp+W/5);
        ctx.stroke();


    }

    const drawLine = (x1,y1,x2,y2,ctx,lineWidth=1,lineColor='black') => {
        ctx.lineWidth = lineWidth;
        ctx.lineColor=lineColor;
        ctx.beginPath();

        ctx.moveTo(x1*W+W/2,y1*W+W/2);
        ctx.lineTo(x2*W+W/2,y2*W+W/2);
        ctx.stroke();
    }
    // 画九宫格里面的斜线
    const drawDiagonalLine=(x1,y1,x2,y2,ctx,lineWidth=1,lineColor='black')=>{
        ctx.lineWidth = lineWidth;
        ctx.lineColor=lineColor;
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
    }

    // 画米字格
    const drawRice=(x1,y1,ctx,lineWidth=1,lineColor='black')=>{
        ctx.lineWidth = lineWidth;
        ctx.lineColor=lineColor;
        const riceWidth=W/7;
        const spacing=4;
        ctx.beginPath();
        // 1 坐标顺时针旋转
        ctx.moveTo(x1-spacing,y1-spacing);
        ctx.lineTo(x1-spacing-riceWidth,y1-spacing);

        ctx.moveTo(x1-spacing,y1-spacing);
        ctx.lineTo(x1-spacing,y1-spacing-riceWidth);

        // 2
        ctx.moveTo(x1+spacing,y1-spacing);
        ctx.lineTo(x1+spacing+riceWidth,y1-spacing);

        ctx.moveTo(x1+spacing,y1-spacing);
        ctx.lineTo(x1+spacing,y1-spacing-riceWidth);

        // 3
        ctx.moveTo(x1+spacing,y1+spacing);
        ctx.lineTo(x1+spacing+riceWidth,y1+spacing);

        ctx.moveTo(x1+spacing,y1+spacing);
        ctx.lineTo(x1+spacing,y1+spacing+riceWidth);


        // 4
        ctx.moveTo(x1-spacing,y1+spacing);
        ctx.lineTo(x1-spacing-riceWidth,y1+spacing);

        ctx.moveTo(x1-spacing,y1+spacing);
        ctx.lineTo(x1-spacing,y1+spacing+riceWidth);
        ctx.stroke();
    }


    // 画米字格右
    const drawRiceRight=(x1,y1,ctx,lineWidth=1,lineColor='black')=>{
        ctx.lineWidth = lineWidth;
        ctx.lineColor=lineColor;
        const riceWidth=W/7;
        const spacing=4;
        ctx.beginPath();



        // 2
        ctx.moveTo(x1+spacing,y1-spacing);
        ctx.lineTo(x1+spacing+riceWidth,y1-spacing);

        ctx.moveTo(x1+spacing,y1-spacing);
        ctx.lineTo(x1+spacing,y1-spacing-riceWidth);

        // 3
        ctx.moveTo(x1+spacing,y1+spacing);
        ctx.lineTo(x1+spacing+riceWidth,y1+spacing);

        ctx.moveTo(x1+spacing,y1+spacing);
        ctx.lineTo(x1+spacing,y1+spacing+riceWidth);

        ctx.stroke();
    }

    // 画米字格右
    const drawRiceLeft=(x1,y1,ctx,lineWidth=1,lineColor='black')=>{
        ctx.lineWidth = lineWidth;
        ctx.lineColor=lineColor;
        const riceWidth=W/7;
        const spacing=4;
        ctx.beginPath();



        // 1 坐标顺时针旋转
        ctx.moveTo(x1-spacing,y1-spacing);
        ctx.lineTo(x1-spacing-riceWidth,y1-spacing);

        ctx.moveTo(x1-spacing,y1-spacing);
        ctx.lineTo(x1-spacing,y1-spacing-riceWidth);

        // 4
        ctx.moveTo(x1-spacing,y1+spacing);
        ctx.lineTo(x1-spacing-riceWidth,y1+spacing);

        ctx.moveTo(x1-spacing,y1+spacing);
        ctx.lineTo(x1-spacing,y1+spacing+riceWidth);

        ctx.stroke();
    }

    useEffect(()=>{
        drawBoard();
    }, []);

    return <canvas ref={canvasRef} width={width} height={height} />;
}



export default App
