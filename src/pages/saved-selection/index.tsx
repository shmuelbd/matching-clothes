import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import styled from 'styled-components';
import Box from './box';


const Container = styled.div`
height: calc(100% - 50px);
width: 100%;
background-color: #e9e9e9;
padding: 10px;
overflow-y: scroll;
text-align: center;
`;
const Title = styled.p`
height: calc(100% - 50px);
width: 100%;
background-color: #e9e9e9;
padding: 10px;
overflow-y: scroll;
text-align: center;
padding-top: 200px;
font-size: 6vw;
font-weight: 600;
`;

type Props = {}

const SavedSelection = (props: Props) => {
    const saves = useAppSelector((state) => state.userServices.savedSelection)

    return (
        <Container>
            דף רשימות שמורות
            {
                saves.length > 0 ?
                    saves.map((item: number, index: number) => (
                        <Box item={item} key={index} index={index} />
                    )) : <Title>אין עדין רשימות לבוש</Title>
            }

        </Container>
    )
}

export default SavedSelection