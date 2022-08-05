import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import styled from 'styled-components';
import Box from './box';


const Container = styled.div`
padding-top: 250px;
height: calc(100% - 50px);
width: 100%;
background-color: #e9e9e9;
`;

type Props = {}

const SavedSelection = (props: Props) => {
    const saves = useAppSelector((state) => state.userServices.savedSelection)
    console.log(saves);

    return (
        <Container>
            {
                saves.map((item: number, index: number) => (
                    <Box id={item} key={index} />
                ))
            }

        </Container>
    )
}

export default SavedSelection