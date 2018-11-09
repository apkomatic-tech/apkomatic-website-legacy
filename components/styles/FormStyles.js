import styled, { css } from 'styled-components';

const borderRadiusMixin = css`
  border-radius: 4px;
`;

const Form = styled.form`
  background: ${props => props.theme.colors.offWhite};
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.25);
  display: block;
  padding: 1.5rem;
  ${borderRadiusMixin};
`;

const InputField = styled.input`
  appearance: none;
  background: #fff;
  border: 0;
  border: 1px solid #e8e8e8;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  display: block;
  font-size: 0.9rem;
  padding: 1rem;
  width: 100%;
  ${borderRadiusMixin};
`;

const FormBlock = styled.div`
  margin-bottom: ${props => (props.spaceBottom ? props.spaceBottom : '0')};

  div {
    width: 100%;
    &:first-child {
      margin-bottom: 1rem;
    }
  }

  @media only screen and (min-width: 575px) {
    align-items: ${props => (props.alignItems ? props.alignItems : 'flex-start')};
    display: flex;
    justify-content: ${props => (props.justifyContent ? props.justifyContent : 'flex-start')};
    div {
      width: 50%;
    }
    div:first-child {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }
`;

const Legend = styled.h1`
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  text-align: center;
`;

export { Form, FormBlock, InputField, Legend };
