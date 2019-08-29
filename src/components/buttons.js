import styled from "styled-components"

export const PrimaryButton = styled.a`
  cursor: pointer;
  border: none;
  background: linear-gradient(90deg, #1495d3 0%, #5dcafe 100%);
  color: #fff !important;
  text-decoration: none;
  font-family: "Open Sans";
  font-size: 14px;
  padding: 10px 44px;
  border-radius: 15px;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px var(--black-color);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px var(--black-color);
  }
`

export const SecondaryButton = styled.a`
  cursor: pointer;
  border: none;
  background: linear-gradient(90deg, #0cad98 0%, #0bd8a5 100%);
  color: white;
  font-family: "Open Sans";
  font-size: 14px;
  border-radius: 15px;
  transition: all 0.2s;
  padding: 10px 44px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px var(--black-color);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px var(--black-color);
  }
`

export const SecondaryButtonOutline = styled.a`
  cursor: pointer;
  border: 3px solid #0bd8a5;
  background: transparent;
  color: #0bd8a5;
  padding: 15px 44px;
  transition: all 0.2s;
  border-radius: 15px;
  display: inline-block;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px var(--black-color);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px var(--black-color);
  }
`

export const SecBtnOutlineActive = {
  background: "linear-gradient(90deg, #0cad98 0%, #0bd8a5 100%)",
  color: "white",
  border: "none",
  padding: "18px 44px",
}
