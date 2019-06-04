import styled from "styled-components"

export const BoldText = styled.p`
    font-weight: 600;
    padding-bottom: 1rem;
`

export const GridWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 7rem auto;
    padding: 0 2rem;
`;

export const FlexItem = styled.div`
    display: flex;
    margin-bottom: 2rem;
    overflow: hidden;
    flex-wrap: wrap;
`

export const FlexSpaceBetween = FlexItem.extend`
    justify-content: space-between;
`

export const FlexCentered = FlexItem.extend`
    justify-content: center;
`