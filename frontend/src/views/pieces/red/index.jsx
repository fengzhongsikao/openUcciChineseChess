import "./index.css";
import "./style.js"

import redStyle from "./style.js";


const handleClick = (event) => {
    // 调用onMove函数，传递新的位置信息
    console.log(event.target.getBoundingClientRect());

};
// 红车
function RedRook1() {
    return (
        <img alt="" onClick={handleClick} className={"redRook1"} style={redStyle.redRook1Style} />
    )
    //className={"redRook1"}
}
function RedRook2() {
    return (
        <img className={"redRook2"} alt="" style={redStyle.redRook2Style} />
    )
}

// 红马
function RedHorse1() {
    return (
        <img className={"redHorse1"} alt="" style={redStyle.redHorse1Style} />
    )
}
function RedHorse2() {
    return (
        <img className={"redHorse2"} alt="" style={redStyle.redHorse2Style} />
    )
}
// 红象
function RedElephant1() {
    return (
        <img className={"redElephant1"} alt="" style={redStyle.redElephant1Style} />
    )
}

// 红象
function RedElephant2() {
    return (
        <div>
            <img className={"redElephant2"} alt="" style={redStyle.redElephant2Style} />
        </div>
    )
}

// 红仕
function RedAdvisor1() {
    return (
        <img className={"redAdvisor1"} alt="" style={redStyle.redAdvisor1Style} />
    )
}

function RedAdvisor2() {
    return (
        <img className={"redAdvisor2"} alt="" style={redStyle.redAdvisor2Style} />
    )
}

// 红帅
function RedKing() {
    return (
        <img className={"redKing"} alt="" style={redStyle.redKingStyle} />
    )
}
// 红炮
function RedCannon1() {
    return (
        <img className={"redCannon1"} alt="" style={redStyle.redCannon1Style} />
    )
}

// 红炮
function RedCannon2() {
    return (
        <img className={"redCannon2"} alt="" style={redStyle.redCannon2Style} />
    )
}
// 红兵
function RedPawn1() {
    return (
        <img className={"redPawn1"} alt="" style={redStyle.redPawn1Style} />
    )
}

function RedPawn2() {
    return (
        <img className={"redPawn2"} alt="" style={redStyle.redPawn2Style} />
    )
}
function RedPawn3() {
    return (
        <img className={"redPawn3"} alt="" style={redStyle.redPawn3Style} />
    )
}
function RedPawn4() {
    return (
        <img className={"redPawn4"} alt="" style={redStyle.redPawn4Style} />
    )
}
function RedPawn5() {
    return (
        <img className={"redPawn5"} alt="" style={redStyle.redPawn5Style} />
    )
}

const allPieces1 = {
    RedRook1,
    RedRook2,
    RedHorse1,
    RedHorse2,
    RedElephant1,
    RedElephant2,
    RedAdvisor1,
    RedAdvisor2,
    RedKing,
    RedCannon1,
    RedCannon2,
    RedPawn1,
    RedPawn2,
    RedPawn3,
    RedPawn4,
    RedPawn5,
}

export default allPieces1;