import React from "react"
import styled from "styled-components"

const PageWrapper = styled.div`
  h2 {
    margin: 2rem 0;
  }
`

const GalleryWrapper = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-areas:
    "A"
    "B"
    "C"
    "D"
    "E";

  @media (min-width: 576px) {
    grid-template-columns: 1.52fr 1fr 1fr 1.525fr;
    grid-template-areas:
      "A  B  C  E"
      "A  D  D  E";
  }
  img:nth-child(1) {
    grid-area: A;
  }
  img:nth-child(2) {
    grid-area: B;
  }
  img:nth-child(3) {
    grid-area: C;
  }
  img:nth-child(4) {
    grid-area: D;
  }
  img:nth-child(5) {
    grid-area: E;
  }
  img {
    width: 100%;
    height: auto;
  }
`

const Gallery = () => (
  <PageWrapper>
    <h2>Gallery</h2>
    <GalleryWrapper>
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/227/1.jpg"
        alt=""
      />
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/227/2.jpg"
        alt=""
      />
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/227/3.jpg"
        alt=""
      />
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/227/4-new.jpg"
        alt=""
      />
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/227/5.jpg"
        alt=""
      />
    </GalleryWrapper>
  </PageWrapper>
)

export default Gallery
