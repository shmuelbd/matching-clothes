import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Clothing from './clothing-store';
import Filter from './filter';
import Steps from './steps';
import { useNavigate } from "react-router-dom";
import { changeSteps, resetTempSaves, saveColletion, setChoice, setSize, setTempSaves } from '../../redux/slices/userServices';
import setSizes from '../../utilities/AlgorithmRecommendations';
import types from '../../utilities/typesCategory';
import concatSavesItems from '../../utilities/concatSavesItems';
import { json } from 'node:stream/consumers';

const Container = styled.div`
height: calc(100% - 50px);
width: 100%;
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
    const saves = useAppSelector((state) => state.userServices.savedSelection)
    const Usersize = useAppSelector((state) => state.userServices.size)
    const [recommended, setRecommended] = useState<any>([])
    const filter = useAppSelector((state) => state.userServices.filter)


    useEffect(() => {
        setfilterClothes(clothes.filter((item: ItemType) => item.type === choice))
    }, [clothes])

    const asyncLocalStorage = async (saves: any) => {
        await localStorage.clear();
        await localStorage.setItem("savedSelection", JSON.stringify(saves));
    }



    useEffect(() => {

        if (step == 1) {
            let size: any = clothes.filter((item: any) => item.id == tempSaves[0])
            dispatch(setSize({ choice: choice, size: setSizes({ type: choice, size: size[0].size }) }))
        }

        setfilterClothes(clothes.filter((item: ItemType) => {
            if (concatSavesItems(saves).includes(item.id)) {
                return false
            }
            if (item.type === types(choice)[step])
                return true
        }))

        if (step === 3) {
            navigate("/saved-selection")
            dispatch(changeSteps(0))
            dispatch(setChoice(""))
            const endTime: any = new Date()
            const total: any = endTime - time
            const totalTime = `${new Date(total).getMinutes()}:${new Date(total).getSeconds()}`
            const create = Date()
            dispatch(saveColletion({ items: tempSaves, date: create, total: totalTime }))
            dispatch(resetTempSaves([]))
        }
        setRecommended([])

    }, [step])

    useEffect(() => {
        if (Usersize != null) {

            setRecommended(filterClothes.filter((item: ItemType) => {
                let sizeTemp: any = Usersize

                if (setSizes({ type: types(choice)[step], size: item.size }) === sizeTemp.size)
                    return true
            }))
        }

    }, [filterClothes])
    useEffect(() => {
        asyncLocalStorage(saves)
    }, [saves])


    return (
        <Container>
            <Filter setfilterClothes={setfilterClothes} filterClothes={filterClothes} />
            <Clothing filterClothes={filter.length > 0 ? filter : filterClothes} recommended={recommended} />
            <Steps />
        </Container>
    )
}

export default ClothingStore