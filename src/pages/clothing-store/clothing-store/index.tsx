import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import Box from './box';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-content: flex-start;
height: calc(100% - 120px);
width: 100%;
background-color: #e9e9e9;
padding: 8px 0;
overflow-y: scroll;
`;

type Props = {
    filterClothes: any
    recommended: any
}
type ItemType = {
    brand: string
    color: string
    id: number
    size: string
    type: string
}


const Clothing = (props: Props) => {
    const step = useAppSelector((state) => state.userServices.step)

    return (
        <Container>
            {
                step > 0 ? <>

                    <br />
                    פריטים מומלצים עבורך
                    <br />
                    <br />

                    {
                        props.recommended.length > 0 ? props.recommended.map((item: ItemType, index: number) => (
                            <Box brand={item.brand} color={item.color} size={item.size} type={item.type} id={item.id} key={index} />
                        )) : "-אין פריטים מומלצים בשבילך-"
                    }
                    <br />
                    -כל הפריטים-
                    <br />
                    <br />
                </> : null
            }
            {
                props.filterClothes.map((item: ItemType, index: number) => (
                    <Box brand={item.brand} color={item.color} size={item.size} type={item.type} id={item.id} key={index} />
                ))
            }
        </Container>
    )
}

export default Clothing