import styled from 'styled-components';
import { accentColor, checkBoxColor, mainTextColor } from '../../GlobalStyle';
import checkmark from '../../assets/images/checkmark-outline.svg';

type CompletedPropType = {
    completed: boolean
}

const StyledTodo = styled.div`
    max-width: 360px;
    margin: auto;
    label {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    &:hover {
        h2 {
            color: ${(props: CompletedPropType) => props.completed ? mainTextColor : accentColor};
        }
        label > div:first-child {
            background: 
            ${(props: CompletedPropType) => props.completed ? `url(${checkmark}) no-repeat top 4px left 4px` : 'none'},
            ${(props: CompletedPropType) => props.completed ? accentColor : 'rgba(255, 132, 105, 0.2)'};
        }
    }
`;

const StyledCheckbox = styled.div`
    min-width: 20px;
    height: 20px;
    background: 
        ${(props: CompletedPropType) => props.completed ? `url(${checkmark}) no-repeat top 4px left 4px` : 'none'},
        ${(props: CompletedPropType) => props.completed ? accentColor : checkBoxColor};
    border-radius: 6px;
    
`;

const StyledDescription = styled.div`
    padding-left: 15px;
    h2 {
        color: ${(props: CompletedPropType) => props.completed ?  checkBoxColor : mainTextColor};
        text-decoration: ${(props: CompletedPropType) => props.completed ?  'line-through' : 'none'};
        font-weight: 500;
        font-size: 16px;
    }
    p {
        color: ${checkBoxColor};
        text-decoration: ${(props: CompletedPropType) => props.completed ?  'line-through' : 'none'};
        padding-top: 4px;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        position: relative;
        &::after {
            content: '';
            display: block;
            position: absolute;
            transform: rotate(90deg);
            width: 12px;
            height: 34px;
            top: -6px;
            right: 10px;
            background: linear-gradient(180deg, #252E42 9.38%, rgba(37, 46, 66, 0) 66.15%);
        }
    }
`;

export {
    StyledTodo,
    StyledCheckbox,
    StyledDescription
};