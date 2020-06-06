import React from "react"
import styled from "styled-components"
import photo1 from "../assets/image/photo1.jpg"
import photo2 from "../assets/image/photo2.jpg"
import photo3 from "../assets/image/photo3.jpg"
import photo4 from "../assets/image/photo4.jpg"
import photo5 from "../assets/image/photo5.jpg"
import photo6 from "../assets/image/photo6.jpg"
import photo7 from "../assets/image/photo7.jpg"

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`

const ContentWrapper = styled.div`
  display: block;
  margin: 2rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 576px) {
    justify-self: flex-end;
    width: 70%;
  }
`

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 30px 50px 50px 150px;
  grid-template-rows: 150px 130px 180px;
  margin-left: auto;

  @media (min-width: 576px) {
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr 60px 60px 60px 130px;
    grid-template-rows: 40px 60px 50px 50px 100px 180px;
  }

  @media (min-width: 860px) {
    grid-gap: 10px;
    grid-template-columns: 130px 130px 60px 60px 60px 130px;
    grid-template-rows: 40px 60px 50px 50px 100px 180px;
  }

  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 1;
    border-top-left-radius: 30px;
  }

  img:nth-of-type(1) {
    grid-column: 4 / span 1;
    grid-row: 1 / span 1;

    @media (min-width: 576px) {
      grid-row: 1 / span 2;
      grid-column: 6 / span 1;
    }
  }
  img:nth-of-type(2) {
    grid-column: 3 / span 2;
    grid-row: 2 / span 1;
    transform: translateY(-20px);
    z-index: -2;

    @media (min-width: 576px) {
      transform: translateY(0px);
      grid-column: 6 / span 1;
      grid-row: 3 / span 3;
      border-radius: 0;
    }
  }
  img:nth-of-type(3) {
    grid-column: 2 / span 3;
    grid-row: 3 / span 1;
    z-index: -3;
    transform: translateY(-40px);
    @media (min-width: 576px) {
      transform: translateY(0px);
      grid-row: 4 / span 2;
      grid-column: 3 / span 3;
    }
  }

  img:nth-of-type(4) {
    display: none;
    @media (min-width: 576px) {
      display: block;

      grid-row: 2 / span 2;

      grid-column: 4 / span 2;
    }
  }

  img:nth-of-type(5) {
    display: none;
    @media (min-width: 576px) {
      display: block;
      grid-row: 6 / span 1;
      grid-column: 3 / span 4;
      border-radius: 0;
    }
  }
  img:nth-of-type(6) {
    display: none;
    @media (min-width: 860px) {
      display: block;
      grid-row: 6 / span 1;
      grid-column: 1 / span 1;
    }
  }
  img:nth-of-type(7) {
    display: none;
    @media (min-width: 860px) {
      display: block;
      grid-row: 5 / span 2;
      grid-column: 2 / span 1;
    }
  }
`

const IndexPage = () => (
  <PageWrapper>
    <ContentWrapper>
      <div>
        <h1>John Doe</h1>
        <p>Welcome on my photography portfolio.</p>
      </div>
    </ContentWrapper>
    <ImageWrapper>
      <img src={photo1} alt="photography" />
      <img src={photo2} alt="photography" />
      <img src={photo7} alt="photography" />
      <img src={photo6} alt="photography" />
      <img src={photo5} alt="photography" />
      <img src={photo3} alt="photography" />
      <img src={photo4} alt="photography" />
    </ImageWrapper>
  </PageWrapper>
)

export default IndexPage
