import styled from 'styled-components';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

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
}



const Box = (props: Props) => {
    return (
        <Container>
            <Button>
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
            <Img src={"https://ae01.alicdn.com/kf/H2a7a16e934414fee9a4ba514c7a9f837I/Misalwa-38-48.jpg_Q90.jpg_.webp"}></Img>


        </Container>
    )
}

export default Box