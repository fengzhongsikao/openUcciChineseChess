import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/material";

export default function Aside() {

    let navigate = useNavigate();
    const [clickValue, setClickValue] = useState(0);

    class Category {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
    }

    const categoryList = [
        new Category(0, '象棋'),
        new Category(1, '测试'),
    ];


    const handleButtonClick = (id) => {
        if (id === 0) {
            navigate('/');
        } else if (id === 1) {
            navigate('test');
        } else if (id === 2) {
            navigate('test');
        }
        setClickValue(id);

    };
    const CategoryItems = ({ item }) => {
        return (
            <Button variant={clickValue === item.id ? "contained" : 'outlined'} onClick={() =>
                handleButtonClick(item.id)} sx={{ maxWidth: 'fit-content' }}>{item.name}</Button>
        )
    }
    return (
        <Box sx={{ width: 100, height: "100vh", borderRight: "1px solid red" }}>
            <Stack spacing={4} >
                {categoryList.map((item) => (
                    <CategoryItems key={item.id} item={item} index={item.id} />
                ))}
            </Stack>
        </Box>
    );
}



