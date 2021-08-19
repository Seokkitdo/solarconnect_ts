import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;

const DateText = styled.div`
  font-size: 26px;
  color: #119955;
  padding-left: 10px;
`;

const DayText = styled.div`
  font-size: 22px;
  color: #119955;
  padding-top: 5px;
`;



const TodoHead = () => {
  //@TODO 현재 시간을 표시해야합니다.
  const getNow = () => {
    let d = new Date();
    let currentTime = d.toLocaleDateString("en-us", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    })
    return currentTime
  }

  let TodoTime: string[] =  getNow().split(',')
  return (
    <TodoHeadBlock>
      <DayText>{TodoTime[0]}</DayText>
      <DateText>{TodoTime[1]},{TodoTime[2]}</DateText>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);
