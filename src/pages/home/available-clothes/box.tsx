import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setChoice } from '../../../redux/slices/userServices';


const Container = styled.div<{ color: string }>`
margin-top: 50px;
position: relative;
display: flex;
flex-wrap: wrap;
align-items: center;
align-content: center;
justify-content: center;
background-color: ${(props) => props.color};
width: 23vw;
height: 23vw;
border-radius: 1.5vw;

`;
const Title = styled.p`
position: absolute;
top: -2.5vw;
right: -2.5vw;
padding-top: 3%;
font-size: 4vw;
font-weight: 600;
width: 30%;
height: 30%;
text-align: center;
background-color: black;
color: white;
border-radius: 50%;
`;
const P = styled.p<{ fontSize: string }>`
font-size: ${(props) => `${props.fontSize}vw`} ;
width: 100%;
text-align: center;
`;
type Props = { name: string, components: any, color: string, type: string }

const Box = (props: Props) => {
    let navigate = useNavigate();
    const dispatch = useAppDispatch()
    const clothes = useAppSelector((state) => state.clothes.data)
    const saves = useAppSelector((state) => state.userServices.savedSelection)

    const goToStore = () => {
        dispatch(setChoice(props.type

        ))
        navigate("/clothing-store")
    }



    const filterSavesitems = () => {
        let allsavesitems: any = []
        const arr = saves.map((item: any, index: number) => {
            let arr = allsavesitems.concat(item.items)
            allsavesitems = arr
        })
        return allsavesitems
    }


    const counter = clothes.filter((item: any) => {
        if (filterSavesitems().includes(item.id)) {
            return false
        }
        if (item.type === props.type)
            return true

    })
    return (

        <Container color={props.color}
            onClick={() => goToStore()}
        >
            <Title>{counter.length}</Title>

            {props.components}
            <P fontSize="5">{props.name}</P>
            <P fontSize="3.5">לחץ לבחירה</P>
        </Container>
    )
}

export default Box