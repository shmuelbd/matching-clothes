import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height:100px;
border: solid 1.2px #7589fa;
border-radius: 7px;
margin: 20px;
padding: 10px;
cursor: pointer;
`;
const Counter = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #1f1f1f;
color: white;
font-size: 6vw;
font-weight: 900;
`;
const BoxText = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
width: calc(100% - 70px);
height: 100%;
`;
const TopText = styled.p`
color: #424242;
font-size: 5.6vw;
font-weight: 900;

`;
const MidText = styled.p`
color: #424242;
font-size: 3.7vw;
`;
const BottomText = styled.p`
color: #424242;
font-size: 4.3vw;
font-weight: 300;

`;

type Props = {}

const BoxChoice = (props: Props) => {
    let navigate = useNavigate();

    return (
        <Container onClick={() => navigate("/saved-selection")}>
            <Counter>
                3
            </Counter>
            <BoxText>
                <TopText>סטים שמורים במערכת</TopText>
                <MidText>סגנונות לבוש שבחרת השמורים במערכת</MidText>
                <BottomText>לצפייה ועריכה לחץ כאן</BottomText>
            </BoxText>
        </Container>
    )
}

export default BoxChoice