import React from "react";
import { useHistory } from "react-router-dom";

import PostCard from "../../components/Card/PostCard";
import VotePost from "../../components/VoteBox/VotePost";
import { CreatePost } from "../../components/Forms/CreatePost/CreatePost";
import { baseUrl } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
import { useProtectPage } from "../../hooks/useProtectPage";
import { goToPost } from "../../routes/condinator";
import Loader from "../../components/Loader/Loader"

import { DivFeed, DivPost } from "./styled";

const Feed = () => {
  useProtectPage();
  const history = useHistory();

  const [posts, updatePosts] = useRequestData(`${baseUrl}/posts`, undefined);

  return (
    <DivFeed>
      <CreatePost update={updatePosts} />
      {!posts ?
        <Loader/>
        :
        posts.posts
          .sort((a, b) => {
            return b.createdAt - a.createdAt;
          })
          .map((posts) => {
            return (
              <DivPost>
                <VotePost
                  id={posts.id}
                  update={updatePosts}
                  quantity={posts.votesCount}
                  direction={posts.userVoteDirection}
                />
                <PostCard
                  key={posts.id}
                  userName={posts.username}
                  title={posts.title}
                  text={posts.text}
                  goTo={() => goToPost(history, posts.id)}
                  commentsCount={posts.commentsCount}
                  buttonName="comentários"
                />
              </DivPost>
            );
          })}
    </DivFeed>
  );
};

export default Feed;
