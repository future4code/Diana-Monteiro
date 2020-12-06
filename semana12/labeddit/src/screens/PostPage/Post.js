import React from "react";
import { useParams, useHistory } from "react-router-dom";

import { useRequestData } from "../../hooks/useRequestData";
import { useProtectPage } from "../../hooks/useProtectPage";
import { baseUrl } from "../../constants/urls";
import { goToFeed } from "../../routes/condinator";

import CommentCard from "../../components/Card/CommentCard";
import { CreateComment } from "../../components/Forms/CreateComment/CreateComment";
import VoteComment from "../../components/VoteBox/VoteComment";
import VotePost from "../../components/VoteBox/VotePost";
import Loader from "../../components/Loader/Loader";
import ToUp from "../../components/ToUp/ToUp";

import { DivFeed, DivPost } from "./styled";

const Post = () => {
  const history = useHistory();

  useProtectPage();
  const { id } = useParams();

  const [{ post }, updatePosts] = useRequestData(`${baseUrl}/posts/${id}`);

  return (
    <DivFeed>
      {!post ? (
        <Loader />
      ) : (
        <DivPost>
          <VotePost
            id={id}
            update={updatePosts}
            quantity={post.votesCount}
            direction={post.userVoteDirection}
          />
          <CommentCard
            id={id}
            userName={post.username}
            title={post.title}
            text={post.text}
            goTo={() => goToFeed(history)}
          />
        </DivPost>
      )}
      <CreateComment update={updatePosts} id={id} />
      {post &&
        post.comments
          .sort((a, b) => {
            return b.createdAt - a.createdAt;
          })
          .map((comment) => {
            return (
              <DivPost>
                <VoteComment
                  id={id}
                  key={id}
                  commentId={comment.id}
                  quantity={comment.votesCount}
                  direction={comment.userVoteDirection}
                  update={updatePosts}
                />

                <CommentCard
                  key={comment.id}
                  userName={comment.username}
                  text={comment.text}
                />
              </DivPost>
            );
          })}
      <ToUp />
    </DivFeed>
  );
};

export default Post;
