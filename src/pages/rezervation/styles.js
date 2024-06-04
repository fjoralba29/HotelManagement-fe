import styled, {css} from "styled-components";
import image from '../../assets/image 1.png'

export const StyledImage = styled.img`
    height: calc(100vh - 85px);

`

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    
`

export const StyledImageContainer = styled.div`
    width: 50%;
`

export const StyledRezervationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 16px;
    gap: 32px;
    > h1 {
        font-size: 32px;
        font-weight: 600;

    }
`

export const StyledForms = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const StyledRezerve = styled.div`
    width: 100%;
`