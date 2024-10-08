'use client'

import styled from 'styled-components'

export const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  gap: 1.5rem;

  & > div > p {
    font-family: ${(props) => props.theme.fonts.secondary};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: ${(props) => props.theme.fontSizes.xsm};

    & > span {
      font-family: ${(props) => props.theme.fonts.secondary};
      font-size: ${(props) => props.theme.fontSizes.xxsm};
      color: ${(props) => props.theme.colors.gray[700]};
    }
  }

  & > div > div {
    display: flex;
    gap: 0.5rem;

    & > label {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      font-family: ${(props) => props.theme.fonts.secondary};
      font-size: ${(props) => props.theme.fontSizes.xxsm};
      width: 100%;
      margin-top: 0.5rem;
    }
  }

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid ${(props) => props.theme.colors.gray[400]};
    font-family: ${(props) => props.theme.fonts.secondary};
    background-color: ${(props) => props.theme.colors.gray[100]};
  }

  & > button {
    margin: 0 auto;
  }

  @media (max-width: 750px) {
    margin-top: 2rem;

    & > div > div {
      flex-direction: column;
    }
  }

  @media (max-width: 450px) {
    input,
    textarea {
      padding: 0.5rem;
    }

    textarea {
      height: 5rem;
    }
  }
`
export const ErrorContainer = styled.div`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSizes.xxsm};
  color: ${(props) => props.theme.colors.error};
`
