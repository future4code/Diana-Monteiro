import React from "react";
import { useParams, useHistory } from "react-router-dom";

import { useRequestData } from "../../hooks/useRequestData";
import { baseUrl } from "../../constants/urls";
import CommentCard from "../../components/Card/CommentCard";
import { useProtectPage } from "../../hooks/useProtectPage";
import { CreateComment } from "../../components/Forms/CreateComment/CreateComment";
import { goToFeed } from "../../routes/condinator";
import VoteComment from "../../components/VoteBox/VoteComment";
import VotePost from "../../components/VoteBox/VotePost"
import Loader from "../../components/Loader/Loader"

import { DivFeed, DivPost } from "./styled"

const Post = () => {
  const history = useHistory();

  useProtectPage();
  const { id } = useParams();

  const [posts, updatePosts] = useRequestData(
    `${baseUrl}/posts/${id}`,
    undefined
  );

  return (
    <DivFeed>
      {!posts ? <Loader/>
      :
      (
        <DivPost>
        <VotePost
        key={id}
        update={updatePosts}
        quantity={posts.post.votesCount}
        direction={posts.post.userVoteDirection}
      />
        <CommentCard
          key={id}
          userName={posts.post.username}
          title={posts.post.title}
          text={posts.post.text}
          goTo={() => goToFeed(history)}
          buttonName="voltar"
        />
        </DivPost>
      )}
      <CreateComment update={updatePosts} id={id} />
      {posts &&
        posts.post.comments
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
    </DivFeed>
  );
};

export default Post;
