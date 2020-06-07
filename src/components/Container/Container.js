import styled from "styled-components"

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 4rem;
  max-width: 1260px;
  padding-right: 1rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 576px) {
    margin-top: 0rem;
  }
`

export default Container
