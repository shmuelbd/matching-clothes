import styled from 'styled-components';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SelectSmall from './select';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 50px;
background-color: #c9c9c9;
padding: 5px 10px;
`;

type Props = { setfilterClothes: Function, filterClothes: any }

const Filter = (props: Props) => {

    return (
        <Container>
            <FilterAltOutlinedIcon />
            סינון
            <SelectSmall setfilterClothes={props.setfilterClothes} filterClothes={props.filterClothes} />
        </Container>
    )
}

export default Filter