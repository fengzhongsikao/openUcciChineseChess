import board from "@/assets/images/棋盘.png";
import "./index.css";
function Board(){

    return (
        <div>
            <img
                width="688px"
                height="800px"
                src={board}
                alt="象棋棋盘图片"
            />
        </div>
    )
}

export default Board;