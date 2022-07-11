import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained / default</h4>
        <StaticImage
          src="../assets/images/recipes/recipe-1.jpeg"
          alt="food"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        ></StaticImage>
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage
          src="../assets/images/recipes/recipe-1.jpeg"
          alt="food"
          placeholder="blurred"
          width={200}
          layout="fixed"
          className="example-img"
          as="div"
        ></StaticImage>
      </article>
      <article>
        <h4>fullwidth</h4>
        <StaticImage
          src="../assets/images/recipes/recipe-1.jpeg"
          alt="food"
          placeholder="dominantColor"
          layout="fullWidth"
          className="example-img"
          as="article"
        ></StaticImage>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70%;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;

  article {
    border: 2px solid red;
  }

  .example-img {
    border-radius: 1rem;
  }

  /* @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  } */
`

export default Images
