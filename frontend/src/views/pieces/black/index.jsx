import "./index.css";


import blackStyle from "./style.js";
// 红车
 function BlackRook1(){
    return (
        <div>
            <img className={"blackRook1"}  alt="" style={blackStyle.blackRook1} />
        </div>
    )
}
 function BlackRook2(){
    return (
        <div>
            <img className={"blackRook2"}  alt="" style={blackStyle.blackRook2}/>
        </div>
    )
}

// 红马
 function BlackHorse1(){
    return (
        <div>
            <img className={"blackHorse1"}  alt="" style={blackStyle.blackHorse1}/>
        </div>
    )
}
 function BlackHorse2(){
    return (
        <div>
            <img className={"blackHorse2"}  alt="" style={blackStyle.blackHorse2}/>
        </div>
    )
}
// 红象
 function BlackElephant1(){
    return (
        <div>
            <img className={"blackElephant1"}  alt="" style={blackStyle.blackElephant1}/>
        </div>
    )
}

// 红象
 function BlackElephant2(){
    return (
        <div>
            <img className={"blackElephant2"}  alt="" style={blackStyle.blackElephant2}/>
        </div>
    )
}

// 红仕
 function BlackAdvisor1(){
    return (
        <div>
            <img className={"blackAdvisor1"}  alt="" style={blackStyle.blackAdvisor1}/>
        </div>
    )
}

 function BlackAdvisor2(){
    return (
        <div>
            <img className={"blackAdvisor2"}  alt="" style={blackStyle.blackAdvisor2} />
        </div>
    )
}

// 红帅
 function BlackKing(){
    return (
        <div>
            <img className={"blackKing"}  alt="" style={blackStyle.blackKing} />
        </div>
    )
}
// 红炮
 function BlackCannon1(){
    return (
        <div>
            <img className={"blackCannon1"}  alt="" style={blackStyle.blackCannon1}/>
        </div>
    )
}

// 红炮
 function BlackCannon2(){
    return (
        <div>
            <img className={"blackCannon2"}  alt="" style={blackStyle.blackCannon2}/>
        </div>
    )
}
// 红兵
 function BlackPawn1(){
    return (
        <div>
            <img className={"blackPawn1"}  alt="" style={blackStyle.blackPawn1}/>
        </div>
    )
}

 function BlackPawn2(){
    return (
        <div>
            <img className={"blackPawn2"}  alt="" style={blackStyle.blackPawn2}/>
        </div>
    )
}
 function BlackPawn3(){
    return (
        <div>
            <img className={"blackPawn3"}  alt="" style={blackStyle.blackPawn3}/>
        </div>
    )
}
 function BlackPawn4(){
    return (
        <div>
            <img className={"blackPawn4"}  alt="" style={blackStyle.blackPawn4} />
        </div>
    )
}
 function BlackPawn5(){
    return (
        <div>
            <img className={"blackPawn5"}  alt="" style={blackStyle.blackPawn5}/>
        </div>
    )
}

const allPieces2={
    BlackRook1,
    BlackRook2,
    BlackHorse1,
    BlackHorse2,
    BlackElephant1,
    BlackElephant2,
    BlackAdvisor1,
    BlackAdvisor2,
    BlackKing,
    BlackCannon1,
    BlackCannon2,
    BlackPawn1,
    BlackPawn2,
    BlackPawn3,
    BlackPawn4,
    BlackPawn5,
}

export default allPieces2;