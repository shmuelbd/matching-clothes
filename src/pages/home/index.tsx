import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchClothes } from '../../redux/slices/clothes';
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
    const dispatch = useAppDispatch()
    const clothes = useAppSelector((state) => state.clothes.data)

    useEffect(() => {
        if (clothes.length < 1)
            dispatch(fetchClothes())
    }, [])

    return (
        <Container>
            <BoxChoice />
            <P>פריטי לבוש זמינים לבחירה</P>
            <AvailableClothes />
        </Container>
    )
}

export default Home