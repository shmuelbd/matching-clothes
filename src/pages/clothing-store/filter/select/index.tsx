import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { setFilter } from '../../../../redux/slices/userServices';

const Input = styled.input`

width: 30%;
height: 30px;
background-color: #dbdbdb;
border: none;
border-radius: 6px;
`;


type Props = { setfilterClothes: Function, filterClothes: any }

const Select = (props: Props) => {
    const dispatch = useAppDispatch()


    const filterSize = (e: string) => {
        const filterItems = props.filterClothes.filter((item: any) =>
            item.size == e
        )
        // console.log(filterItems);

        dispatch(setFilter(filterItems))
    }
    const filterColor = (e: string) => {
        const filterItems = props.filterClothes.filter((item: any) =>
            item.color == e
        )
        // console.log(filterItems);

        dispatch(setFilter(filterItems))
    }

    return (
        <>
            <Input placeholder='הקלד מידה' onChange={(e) => filterSize(e.target.value)}></Input>
            <Input placeholder='הקלד צבע' onChange={(e) => filterColor(e.target.value)}></Input>
        </>
    )
}

export default Select