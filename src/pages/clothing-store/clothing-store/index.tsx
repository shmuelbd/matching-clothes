import styled from 'styled-components';
import Box from './box';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
height: calc(100% - 120px);
width: 100%;
background-color: #e9e9e9;
padding: 8px 0;
overflow-y: scroll;
`;

type Props = {
    filterClothes: any
}
type ItemType = {
    brand: string
    color: string
    id: number
    size: string
    type: string
}


const Clothing = (props: Props) => {

    return (
        <Container>
            {
                props.filterClothes.map((item: ItemType, index: number) => (
                    <Box brand={item.brand} color={item.color} size={item.size} type={item.type} id={item.id} key={index} />
                ))
            }
        </Container>
    )
}

export default Clothing