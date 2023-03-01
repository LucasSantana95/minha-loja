import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #e4e7e9;
    height: 100vw;
    width: 100vw;
`
export const Products = styled.section`
    border: 1px solid black;
    box-shadow: 0px 0px 10px 5px #08364e;
    width: 900px;
`
export const Address = styled.div`
    margin-top: 20px;
    width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    box-shadow: 0px 0px 10px 5px #08364e;
    & p {
        font-size: 19px;
    }
`

/* 

.address-info-summary{
    margin-top: 20px;
    width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    box-shadow: 0px 0px 10px 5px #08364e;
}
.address-info-summary p{
    font-size: 18px;
} */
