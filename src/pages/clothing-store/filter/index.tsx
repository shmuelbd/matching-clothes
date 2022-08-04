import styled from 'styled-components';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const Container = styled.div`
display: flex;
width: 100%;
height: 50px;
background-color: #78bddd;
`;

type Props = {}

const Filter = (props: Props) => {
    return (
        <Container>
            <FilterAltOutlinedIcon />
        </Container>
    )
}

export default Filter