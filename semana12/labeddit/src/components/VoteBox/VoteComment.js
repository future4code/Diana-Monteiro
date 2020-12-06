import React, { useState } from "react";

import arrowDown from "../../assests/downarrow.svg";
import arrowDownRed from "../../assests/downarrowred.svg";
import arrowUp from "../../assests/uparrow.svg";
import arrowUpGreen from "../../assests/uparrowgreen.svg";

import { voteOnComment } from "../../services/vote";
import { DivVote, Arrow } from "./styled";

const VoteComment = (props) => {
  const onClickRate = (vote) => {
    const body = {
      direction: vote,
    };

    voteOnComment(body, props.update, props.id, props.commentId);
  };

  return (
    <DivVote>
      {props.direction === 0 ? (
        <>
          <Arrow
            src={arrowUp}
            onClick={() => onClickRate(1)}
            onMouseOver={(e) => (e.currentTarget.src = arrowUpGreen)}
            onMouseOut={(e) => (e.currentTarget.src = arrowUp)}
          />
          <p>{props.quantity}</p>
          <Arrow
            src={arrowDown}
            onClick={() => onClickRate(-1)}
            onMouseOver={(e) => (e.currentTarget.src = arrowDownRed)}
            onMouseOut={(e) => (e.currentTarget.src = arrowDown)}
          />
        </>
      ) : props.direction === 1 ? (
        <>
          <Arrow src={arrowUpGreen} onClick={() => onClickRate(1)} />
          <p>{props.quantity}</p>
          <Arrow
            src={arrowDown}
            onClick={() => onClickRate(0)}
            onMouseOver={(e) => (e.currentTarget.src = arrowDownRed)}
            onMouseOut={(e) => (e.currentTarget.src = arrowDown)}
          />
        </>
      ) : (
        <>
          <Arrow
            src={arrowUp}
            onClick={() => onClickRate(0)}
            onMouseOver={(e) => (e.currentTarget.src = arrowUpGreen)}
            onMouseOut={(e) => (e.currentTarget.src = arrowUp)}
          />
          <p>{props.quantity}</p>
          <Arrow src={arrowDownRed} onClick={() => onClickRate(-1)} />
        </>
      )}
    </DivVote>
  );
};

export default VoteComment;
