import React from "react";
import styled from "styled-components";
import choose from "../assets/choose.png";
import Button from "./Button";
export default function Choose() {
  return (
    <Section>
      <div className="image">
        <img src={choose} alt="choose" />
      </div>
      <div className="content">
        <h2>Why should you Choose Our Website ?</h2>
        <p>
          We have the world's largest NFT collection along with an evergrowing customer base. 
          We have been honored the most "Trustworthy Markeplace Award" for two years in a row by TIMES organization. 
          We are on a mission to make the NFT's reachable to every corner of the planet. Let's reach this goal together.
        </p>
        <Button text="Read More" blue />
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 9rem;
  gap: 3rem;
  margin-bottom: 5rem;
  .image {
  }
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    h2 {
      font-size: 4rem;
    }
    p {
      color: #7b7e86;
      line-height: 2rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 2rem;
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 50vw;
      }
    }
    .content {
      gap: 1rem;
      h2 {
        font-size: 1rem;
      }
      p {
        line-height: 1.3rem;
        font-size: 0.9rem;
      }
    }
  }
`;
