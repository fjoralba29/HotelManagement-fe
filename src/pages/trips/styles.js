import styled, {css} from "styled-components";

export const StyledTripCard = styled.div`
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
`

export const StyledTripHeader = styled.div`
    display: flex;
    align-items: center;
`

export const StyledGlobeImage = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
`

export const StyledTripTitle = styled.h2`
    font-size: 24px;
    color: #333;
`

export const StyledTripContent = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: space-around;
    width: 100%;
    > div > h3 {
        font-size: 16px;
    }
`

export const StyledImage = styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 10px;
`