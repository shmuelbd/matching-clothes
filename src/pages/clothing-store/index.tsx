import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Clothing from './clothing-store';
import Filter from './filter';
import Steps from './steps';
import { useNavigate } from "react-router-dom";
import { changeSteps, saveColletion, setChoice, setTempSaves } from '../../redux/slices/userServices';

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
    let navigate = useNavigate();
    const dispatch = useAppDispatch()

    const clothes = useAppSelector((state) => state.clothes.data)
    const choice = useAppSelector((state) => state.userServices.choice)
    const step = useAppSelector((state) => state.userServices.step)
    const tempSaves = useAppSelector((state) => state.userServices.tempsaves)
    const [filterClothes, setfilterClothes] = useState<ItemType[]>(clothes.filter((item: ItemType) => item.type === choice))
    const [time, setTime] = useState<any>(new Date())


    let types = ["shoes", "shirt", "pants"]
    if (choice === "shirt")
        types = ["shirt", "shoes", "pants"]

    if (choice === "pants")
        types = ["pants", "shirt", "shoes"]

    useEffect(() => {
        setfilterClothes(clothes.filter((item: ItemType) => item.type === types[step]))
        if (step === 3) {
            navigate("/saved-selection")
            dispatch(changeSteps(0))
            dispatch(setChoice(""))
            const endTime: any = new Date()
            const total: any = endTime - time
            const totalTime = `${new Date(total).getMinutes()}:${new Date(total).getSeconds()}`
            const create = Date()
            dispatch(saveColletion({ items: tempSaves, date: create, total: totalTime }))
            dispatch(setTempSaves([]))
        }

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