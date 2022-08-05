import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { fetchClothes } from "../../redux/slices/clothes";

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
height: 50px;
width: 100%;
background-color: #c9c9c9;
`;

type Props = {}

const Header = (props: Props) => {
    const dispatch = useAppDispatch()
    const clothes = useAppSelector((state) => state.clothes.data)

    useEffect(() => {
        if (clothes.length < 1)
            dispatch(fetchClothes())
    }, [])

    const Style = (arg: any) => {
        let color: string = arg.isActive ? "green" : "blue";
        return { color: color }
    }

    return (
        <Container>
            <NavLink to="/"
                style={Style}
            >
                <HomeIcon />
            </NavLink >

            <NavLink to="/clothing-store"
                style={Style}
            >
                <CheckroomIcon />
            </NavLink >

            <NavLink to="/saved-selection"
                style={Style}
            >
                <LocalMallIcon />
            </NavLink >

        </Container>
    )
}

export default Header