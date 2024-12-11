import './App.css';
import Board from "./views/board/index.jsx";
import Aside from "./views/aside/index.jsx"
import Test from "./views/test/index.jsx"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Stack from '@mui/material/Stack';

function App() {
    return (

        <BrowserRouter basename='/'>
            <Stack direction="row" spacing={10} >
                <Aside></Aside>
                <Routes>
                    <Route path='/' element={<Board />} />
                    <Route path='test' element={<Test />} />
                </Routes>
            </Stack>


        </BrowserRouter>

    )

}

export default App
