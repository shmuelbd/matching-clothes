import styled from 'styled-components';
import Box from './box';
import AirlineSeatLegroomExtraOutlinedIcon from '@mui/icons-material/AirlineSeatLegroomExtraOutlined';
import SnowshoeingOutlinedIcon from '@mui/icons-material/SnowshoeingOutlined';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 65px;
/* border: solid 1.2px #d292e2; */
border-radius: 7px;
margin: 20px;
/* padding: 10px; */
/* cursor: pointer; */

`;

type Props = {}

const AvailableClothes = (props: Props) => {

    return (
        <Container>
            <Box components={<AirlineSeatLegroomExtraOutlinedIcon />} name="מכנסיים" color='#a0e3ec' type='pants' />
            <Box components={<SelfImprovementOutlinedIcon />} name="חולצות" color='#f7d7b9' type='shirt' />
            <Box components={<SnowshoeingOutlinedIcon />} name="נעליים" color='#dcbce4' type='shoes' />

        </Container>
    )
}

export default AvailableClothes