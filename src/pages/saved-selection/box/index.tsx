import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';


const Container = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
width: 100%;
background-color: #ffffff;
margin: 4px;
font-size: 4vw;

`;
const Title = styled.div`
font-weight: 600;
width: 100%;
`;
const SubTitle = styled.p`
padding:0 6px;
font-weight: 600;
font-size: 4vw;
`;

type Props = { item: any, index: number }

const Box = (props: Props) => {
    const clothes = useAppSelector((state) => state.clothes.data)
    const itemDetails: any = clothes.filter((item: any) => props.item.items.includes(item.id))
    console.log("itemDetails: ", itemDetails);

    return (
        <Container>
            <Title>    רשימה מס': {props.index + 1}</Title>

            {
                itemDetails.map((item: any, index: number) => (
                    <Item item={item} key={index} />
                ))
            }

        </Container>
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
        <Container>
            <h4>{translate(props.item.type)}</h4>{" "}
            <SubTitle>{"מותג: "}</SubTitle>  {props.item.brand}
            <SubTitle>{"מידה: "}</SubTitle>{props.item.size}
            <SubTitle>{"צבע: "}</SubTitle>{props.item.color}


        </Container>
    )
}
