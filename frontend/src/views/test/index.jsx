import Button from '@mui/material/Button';

export default function test() {


    function click1() {
        console.log("asasas");
        // window.runtime.EventsOn("PopMessage", () => { });

        window.runtime.EventsEmit("MessageDialogJs", "");
    }


    return (
        <div>
            <Button onClick={click1}>test</Button>

            <Button>test2</Button>
        </div>
    );
}