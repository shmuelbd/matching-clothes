import styled from 'styled-components';
import AvailableClothes from './available-clothes';
import BoxChoice from './box-choices';

type Props = {}

const Container = styled.div`
padding-top: 250px;
height: calc(100% - 50px);
width: 100%;
background-color: #e9e9e9;
`;
const P = styled.p`
text-align: center;
width: 100%;
font-size: 5vw;
margin-bottom: 20px;
`;
const Home = (props: Props) => {
    return (
        <Container>
            <BoxChoice />
            <P>פריטי לבוש זמינים לבחירה</P>
            <AvailableClothes />
        </Container>
    )
}

export default Home