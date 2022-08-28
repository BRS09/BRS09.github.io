import react from "react";
import styled, { css } from "styled-components";

const Header = styled.div`
  background-color: #3b3b3b;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;
const Button = styled.button`
  background-color: #de665d;
  border: 1px solid #3b3b3b;
  border-radius: 200px;
  height: 15px;
  width: 15px;
  margin-top: 7px;
  margin-left: 10px;
  padding: 0;

  ${(props) =>
    props.primary &&
    css`
      background-color: #edc42f;
      margin-left: 6px;
    `}
`;

const TerminalHeader = () => {
  return (
    <Header>
      <Button></Button>
      <Button primary></Button>
    </Header>
  );
};

export default TerminalHeader;
