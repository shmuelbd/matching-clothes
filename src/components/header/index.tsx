import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`

height: 50px;
width: 100%;
background-color: #c9c9c9;
`;

type Props = {}

const Header = (props: Props) => {

    const Style = (arg: any) => {
        let color: string = arg.isActive ? "green" : "blue";
        return { color: color }
    }

    return (
        <Container>
            <NavLink to="/"
                style={Style}
            >
                Home
            </NavLink >
            {" "}
            |{" "}
            <NavLink to="/clothing-store"
                style={Style}
            >
                Clothing store
            </NavLink >
            {" "}
            |{" "}
            <NavLink to="/saved-selection"
                style={Style}
            >
                saved-selection
            </NavLink >

        </Container>
    )
}

export default Header