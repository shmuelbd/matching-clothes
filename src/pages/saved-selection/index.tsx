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
`;

type Props = {}

const SavedSelection = (props: Props) => {
    const saves = useAppSelector((state) => state.userServices.savedSelection)

    return (
        <Container>
            {
                saves.map((item: number, index: number) => (
                    <Box item={item} key={index} index={index} />
                ))
            }

        </Container>
    )
}

export default SavedSelection