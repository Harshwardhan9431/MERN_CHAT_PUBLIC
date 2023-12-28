import React from "react";
import styled from "styled-components";
import Picker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";

function ChatInput() {
  return (
    <div>
      <Container>
        <div className="button-container">
          <div className="emoji">
            <BsEmojiSmileFill />
          </div>
        </div>
        <form className="input-container">
          <input type="text" placeholder="type your message here" />
          <button className="submit">
            <IoMdSend />
          </button>
        </form>
      </Container>
    </div>
  );
}

export default ChatInput;

const Container = styled.div`
  display: grid;
  grid-template-columns: 5% 95%;
  align-items: center;
  background-color: #080420;
  padding: 0.2rem;
  padding-bottom: 0.3rem;
  .button {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }
    }
    .input-container {
      width: 100%;
      border-radius: 2rem;
      display: flex;
      align-items: center;
      gap: 2rem;
      background-color: #ffffff34;
      input {
        width: 90%;
        height: 60%;
        background-color: transparent;
        color: white;
        border: none;
        padding-left: 1rem;
        font-size: 1.2rem;
        &::selection {
          background-color: #9186f3;

        }
        &:focus {
          outline: none;
        }
      }
      button{
        padding: 0.3rem 2rem;
        border-radius:2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #9a86f3;
        border: none;
        svg {
          font-sixe: 2rem;
          color: white;
        }
      }

    }
  }
`; 
