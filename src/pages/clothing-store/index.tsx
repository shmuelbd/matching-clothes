import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchClothes } from '../../redux/slices/clothes';
import Clothing from './clothing-store';
import Filter from './filter';

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
    const dispatch = useAppDispatch()
    const clothes = useAppSelector((state) => state.clothes.data)
    const [filterByInput, setFilterByInput] = useState("shirt")
    const filterClothes = clothes.filter((item: ItemType) => item.type === filterByInput)
    const types = ["shoes", "shirt", "pants"]

    useEffect(() => {
        dispatch(fetchClothes())
    }, [])

    return (
        <Container>
            <Filter />
            <Clothing filterClothes={filterClothes} />
        </Container>
    )
}

export default ClothingStore