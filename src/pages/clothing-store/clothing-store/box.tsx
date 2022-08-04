import styled from 'styled-components';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useMemo, useState } from 'react';
import { changeSteps } from '../../../redux/slices/userServices';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
width: 96%;
height: 100px;
background-color: #ffffff;
justify-content: space-between;
align-items: center;
padding: 0 10px;
margin: 4px 0;
border-radius: 3vw;
`;
const Img = styled.img`
display: flex;
width: 90px;
height: 90px;
background-color: antiquewhite;
width: 100px;
border-radius: 12px;
`;
const TextBox = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
width: calc(70% - 120px);
`;
const Text = styled.p<{ size: string, sweight: string }>`
text-align: left;
padding-left: 10px;
padding-bottom: 4px;
font-size:  ${(props) => `${props.size}vw`};
font-weight:  ${(props) => props.sweight};
width: 100%;
`;
const Button = styled.div`
width: calc(30%);
`;
type Props = {
    brand: string
    color: string
    size: string
    type: string
}



const Box = (props: Props) => {
    const dispatch = useAppDispatch()
    let image = ""
    const step = useAppSelector((state) => state.userServices.step)

    switch (props.type) {
        case "shoes":
            image = "https://ae01.alicdn.com/kf/H2a7a16e934414fee9a4ba514c7a9f837I/Misalwa-38-48.jpg_Q90.jpg_.webp"
            break;
        case "shirt":
            image = "https://images-dynamic-arcteryx.imgix.net/S22/1350x1710/Cormac-Arc-Word-Shirt-SS-Forage.jpg?auto=format%2Ccompress&q=75&ixlib=react-9.5.1-beta.1&w=450"
            break;
        case "pants":
            image = "https://images-dynamic-arcteryx.imgix.net/S22/1350x1710/Gamma-SL-Pant-Black-Sapphire.jpg?auto=format%2Ccompress&q=75&ixlib=react-9.5.1-beta.1&w=450"
            break;
        default:
    }

    return (
        <Container>
            <Button onClick={() => dispatch(changeSteps(step + 1))}>
                <AddOutlinedIcon />
            </Button>
            <TextBox>
                <Text size='4' sweight="600" >
                    {props.brand}
                </Text>
                <Text size='3.5' sweight="400">
                    {props.color}
                </Text>
                <Text size='3.5' sweight="400">
                    {props.size}
                </Text>
            </TextBox>
            <Img src={image}></Img>


        </Container>
    )
}

export default Box