import styles from "styled-components"

const Container = styles.div`
margin-right: auto; 
margin-left:  auto; 
margin-top:4rem;
max-width: 1260px; 
padding-right: 1rem; 
padding-left:  1rem; 

@media (min-width: 576px) {
    margin-top:0;
  }
`

export default Container
