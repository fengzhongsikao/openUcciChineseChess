import "./index.css";
import allPieces1 from "../pieces/red/index.jsx";
import allPieces2 from "../pieces/black/index.jsx";
function Board() {

    // function pop() {
    //     console.log("asasas");
    //     // window.runtime.EventsOn("PopMessage", () => { });
    //
    //     window.runtime.EventsEmit("MessageDialogJs", "");
    //     //   <button onClick={pop}></button>
    // }
    return (
        <div className={"boardStyle"}>
            <allPieces1.RedRook1></allPieces1.RedRook1>
            <allPieces1.RedRook2></allPieces1.RedRook2>
            <allPieces1.RedHorse1></allPieces1.RedHorse1>
            <allPieces1.RedHorse2></allPieces1.RedHorse2>
            <allPieces1.RedElephant1></allPieces1.RedElephant1>
            <allPieces1.RedElephant2></allPieces1.RedElephant2>
            <allPieces1.RedAdvisor1></allPieces1.RedAdvisor1>
            <allPieces1.RedAdvisor2></allPieces1.RedAdvisor2>
            <allPieces1.RedKing></allPieces1.RedKing>
            <allPieces1.RedCannon1></allPieces1.RedCannon1>
            <allPieces1.RedCannon2></allPieces1.RedCannon2>
            <allPieces1.RedPawn1></allPieces1.RedPawn1>
            <allPieces1.RedPawn2></allPieces1.RedPawn2>
            <allPieces1.RedPawn3></allPieces1.RedPawn3>
            <allPieces1.RedPawn4></allPieces1.RedPawn4>
            <allPieces1.RedPawn5></allPieces1.RedPawn5>


            <allPieces2.BlackRook1></allPieces2.BlackRook1>
            <allPieces2.BlackRook2></allPieces2.BlackRook2>
            <allPieces2.BlackHorse1></allPieces2.BlackHorse1>
            <allPieces2.BlackHorse2></allPieces2.BlackHorse2>
            <allPieces2.BlackElephant1></allPieces2.BlackElephant1>
            <allPieces2.BlackElephant2></allPieces2.BlackElephant2>
            <allPieces2.BlackAdvisor1></allPieces2.BlackAdvisor1>
            <allPieces2.BlackAdvisor2></allPieces2.BlackAdvisor2>
            <allPieces2.BlackKing></allPieces2.BlackKing>
            <allPieces2.BlackCannon1></allPieces2.BlackCannon1>
            <allPieces2.BlackCannon2></allPieces2.BlackCannon2>
            <allPieces2.BlackPawn1></allPieces2.BlackPawn1>
            <allPieces2.BlackPawn2></allPieces2.BlackPawn2>
            <allPieces2.BlackPawn3></allPieces2.BlackPawn3>
            <allPieces2.BlackPawn4></allPieces2.BlackPawn4>
            <allPieces2.BlackPawn5></allPieces2.BlackPawn5>
        </div>
    )
}

export default Board;