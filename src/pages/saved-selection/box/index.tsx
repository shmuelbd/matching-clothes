import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteItem } from '../../../redux/slices/userServices';
import Moment from 'react-moment';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
width: 100%;
background-color: #ffffff;
font-size: 4vw;
justify-content: space-evenly;
margin: 20px 0px;
border-radius: 12px;
border: 3px solid #d1d1d1;
`;
const ContainerSubBox = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
width: 100%;
background-color: #ffffff;
font-size: 4vw;
justify-content: space-evenly;
border-radius: 12px;
/* border: 1px solid #d1d1d1; */
`;
const BoxButton = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
width: 100%;
justify-content: center;
padding: 20px;
`;
const Title = styled.div`
font-weight: 600;
width: 100%;
text-align: center;
font-size: 5vw;
padding: 5px;
margin-bottom: 20px;
background-color: #d1d1d1;
border-radius: 7px 7px 0 0 ;

`;
const P = styled.p`
font-weight: 600;
width: 100%;
text-align: center;
font-size: 4vw;
padding: 5px;
background-color: #e9e9e9;

`;
const SubTitle = styled.p`
color: #f3b36a;
padding:0 6px;
font-weight: 600;
font-size: 4vw;
`;

type Props = { item: any, index: number }

const Box = (props: Props) => {
    const clothes = useAppSelector((state) => state.clothes.data)
    const itemDetails: any = clothes.filter((item: any) => props.item.items.includes(item.id))
    const dispatch = useAppDispatch()



    return (
        <Container>
            <Title>    רשימה מס': {props.index + 1}</Title>
            <ContainerSubBox>
                <P>תאריך: </P>{" "}
                <SubTitle>{"נוצר ב: : "}</SubTitle>  {<Moment format="YYYY/MM/DD" date={props.item.date} />}
                <SubTitle>{"פרק זמן: "}</SubTitle>{props.item.total}

            </ContainerSubBox>
            {
                itemDetails.map((item: any, index: number) => (
                    <Item item={item} key={index} />
                ))
            }

            <BoxButton>
                <Button size="small" variant="outlined" startIcon={<DeleteIcon />} color="error" onClick={() => dispatch(deleteItem(props.index))}>
                    מחיקה
                </Button>
            </BoxButton>

        </Container >
    )
}
export default Box
type PropsItem = { item: any }

const translate = (item: string) => {
    switch (item) {
        case "shoes":
            return "נעליים: "
        case "shirt":
            return "חולצה: "

        case "pants":
            return "מכנסיים: "
        default:
    }
}

const Item = (props: PropsItem) => {

    return (
        <ContainerSubBox>
            <P>{translate(props.item.type)}</P>{" "}
            <SubTitle>{"מותג: "}</SubTitle>  {props.item.brand}
            <SubTitle>{"מידה: "}</SubTitle>{props.item.size}
            <SubTitle>{"צבע: "}</SubTitle>{props.item.color}


        </ContainerSubBox>
    )
}
