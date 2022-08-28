import React from "react";
import styled, { css } from "styled-components";
import {
  SiGmail,
  SiLinkedin,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiHtml5,
  SiCss3,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiCsharp,
} from "react-icons/si";

const CommandLocation = styled.p`
  color: white;
  margin-left: 1.5%;
  padding: 0.2%;
  word-wrap: break-word;

  .Typewriter {
    display: inline;
  }
  .Typewriter__cursor {
    background-color: gray;
    color: gray;
    animation: none;
  }
`;
const TerminalOutput = styled.p`
  color: #ffc66b;
  margin-left: 2%;
  word-wrap: break-word;
  padding: 0.2%;

  ${(props) =>
    props.row &&
    css`
      font-size: 150%;
      display: flex;
      flex-flow: row;
      gap: 15px;

      &.skills {
        & :nth-child(1) {
          color: #f16529;
        }
        & :nth-of-type(2) {
          color: #264de4;
        }
        & :nth-child(3) {
          color: #f0db4f;
        }
        & :nth-child(4) {
          color: #61dbfb;
        }
        & :nth-child(5) {
          color: #239120;
        }
        & :nth-child(6) {
          color: #512bd4;
        }
        & :nth-child(7) {
          color: #cc2927;
        }
        & :nth-child(8) {
          color: #553c7b;
        }
      }
    `}
`;
const Links = styled.a`
  text-decoration: none;
  color: #ff5900;
  font-size: 115%;

  &.gmail {
    color: #ea4335;
    &:hover {
      color: #e87c72;
    }
  }
  &.linkedin {
    color: #0e76a8;
    &:hover {
      color: #508aa6;
    }
  }
`;

const TerminalBody = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        gap: "15px",
        marginTop: "1%",
      }}
    >
      <CommandLocation>braydens@portfolio currentLocation % ls</CommandLocation>
      <TerminalOutput>"Muncie, IN"</TerminalOutput>
      <CommandLocation>braydens@portfolio contactInfo % ls</CommandLocation>
      <TerminalOutput row>
        <Links href="mailto:braydenscott0933@gmail.com" className="gmail">
          <SiGmail />
        </Links>
        <Links
          href="https://www.linkedin.com/in/brayden-scott-b87793166/"
          className="linkedin"
        >
          <SiLinkedin />
        </Links>
      </TerminalOutput>
      <CommandLocation>braydens@portfolio education % ls</CommandLocation>
      <TerminalOutput>
        "AS - Software Development - Ivy Tech Community College"
      </TerminalOutput>
      <CommandLocation>
        braydens@portfolio developmentSkills % ls
      </CommandLocation>
      <TerminalOutput row className="skills">
        <SiHtml5 title="HTML" />
        <SiCss3 title="CSS" />
        <SiJavascript title="Javascript" />
        <SiReact title="ReactJS" />
        <SiCsharp title="C#" />
        <SiDotnet title=".NET Framework" />
        <SiMicrosoftsqlserver title="SQL" />
        <SiBootstrap title="Bootstrap" />
      </TerminalOutput>
      <CommandLocation style={{ marginBottom: "1%" }}>
        braydens@portfolio %{" "}
      </CommandLocation>
    </div>
  );
};

export default TerminalBody;
