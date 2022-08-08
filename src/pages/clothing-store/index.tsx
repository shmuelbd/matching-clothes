import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Clothing from './clothing-store';
import Filter from './filter';
import Steps from './steps';
import { useNavigate } from "react-router-dom";
import { changeSteps, resetTempSaves, saveColletion, setChoice, setSize, setTempSaves } from '../../redux/slices/userServices';

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

    const filterSavesitems = () => {
        let allsavesitems: any = []
        const arr = saves.map((item: any, index: number) => {
            let arr = allsavesitems.concat(item.items)
            allsavesitems = arr
        })
        return allsavesitems
    }

    //set sizes for user
    let types = ["shoes", "shirt", "pants"]
    const setSizes = (item: any) => {
        let size = ""
        if (item.type === "shoes") {
            if (item.size < 40)
                return size = "S"
            if (item.size < 43)
                return size = "M"
            if (item.size < 44)
                return size = "L"
        }
        if (item.type === "shirt") {
            if (item.size === "S")
                return size = "S"
            if (item.size === "M")
                return size = "M"
            if (item.size === "L")
                return size = "L"
            if (item.size === "XL")
                return size = "L"
            if (item.size === "XXL")
                return size = "L"
        }
        if (item.type === "pants") {
            if (item.size < 39)
                return size = "S"
            if (item.size < 42)
                return size = "M"
            if (item.size > 42)
                return size = "L"
        }
        return size
    }





    useEffect(() => {
        setfilterClothes(clothes.filter((item: ItemType) => item.type === choice))
    }, [clothes])



    if (choice === "shirt")
        types = ["shirt", "shoes", "pants"]

    if (choice === "pants")
        types = ["pants", "shirt", "shoes"]

    // useMemo(() => {
    //      console.log(Usersize) 

    //     }, [Usersize])

    useEffect(() => {

        if (step == 1) {
            let size: any = clothes.filter((item: any) => item.id == tempSaves[0])
            dispatch(setSize({ choice: choice, size: setSizes({ type: choice, size: size[0].size }) }))
        }

        setfilterClothes(clothes.filter((item: ItemType) => {
            if (filterSavesitems().includes(item.id)) {
                return false
            }
            if (item.type === types[step])
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

                if (setSizes({ type: types[step], size: item.size }) === sizeTemp.size)
                    return true
            }))
        }

    }, [filterClothes])


    return (
        <Container>
            <Filter />
            <Clothing filterClothes={filterClothes} recommended={recommended} />
            <Steps />
        </Container>
    )
}

export default ClothingStore