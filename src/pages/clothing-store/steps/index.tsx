import styled from 'styled-components';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useAppSelector } from '../../../redux/hooks';


const Container = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 70px;
background-color: #e9e9e9;
`;
const P = styled.p`
font-size: 4vw;
margin-right: 10px;
`;


type Props = {}

const Steps = (props: Props) => {
    const choice = useAppSelector((state) => state.userServices.choice)
    const step = useAppSelector((state) => state.userServices.step)

    const steps = () => {
        let arraaysteps = ['מכנסיים', 'חולצות', 'נעליים',];

        if (choice === "shirt") {
            arraaysteps = ['חולצות', 'מכנסיים', 'נעליים',];

        }
        if (choice === "shoes") {
            arraaysteps = ['נעליים', "חולצות", 'מכנסיים'];
        }
        return arraaysteps
    }



    return (
        <Container>
            <Stepper activeStep={step} >
                {steps().map((label) => (
                    <Step key={label}>
                        <StepLabel><P>{label}</P></StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Container>
    )
}

export default Steps