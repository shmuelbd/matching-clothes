import styled from 'styled-components';
import BoxChoice from './box-choices';

type Props = {}

const Container = styled.div`

height: calc(100% - 50px);
width: 100%;
background-color: #e9e9e9;
`;

const Home = (props: Props) => {
    return (
        <Container>
            ssdsf
            <BoxChoice />
        </Container>
    )
}

export default Home