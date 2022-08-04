import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks';
import Clothing from './clothing-store';
import Filter from './filter';
import Steps from './steps';

const Container = styled.div`
height: calc(100% - 50px);
width: 100%;
/* background-color: #e9e9e9; */
overflow-y: scroll;
`;

type Props = {}

export type ItemType = {
    brand: string
    color: string
    id: number
    size: string
    type: string
}

const ClothingStore = (props: Props) => {
    const clothes = useAppSelector((state) => state.clothes.data)
    const choice = useAppSelector((state) => state.userServices.choice)
    const step = useAppSelector((state) => state.userServices.step)
    const [filterClothes, setfilterClothes] = useState<ItemType[]>(clothes.filter((item: ItemType) => item.type === choice))

    let types = ["shoes", "shirt", "pants"]
    if (choice === "shirt")
        types = ["shirt", "shoes", "pants"]

    if (choice === "pants")
        types = ["pants", "shirt", "shoes"]

    useEffect(() => {
        setfilterClothes(clothes.filter((item: ItemType) => item.type === types[step]))
    }, [step])


    return (
        <Container>
            <Filter />
            <Clothing filterClothes={filterClothes} />
            <Steps />
        </Container>
    )
}

export default ClothingStore