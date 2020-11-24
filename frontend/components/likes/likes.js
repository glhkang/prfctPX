import React, { useEffect, useState } from "react";
import { Tooltip } from "antd";
import Icon, { HeartOutlined, HeartFilled } from "@ant-design/icons";
import Axios from "axios";

const Likes = ({ photoId, userId, currentUserId }) => {
  const [Likes, setLikes] = useState(0);
  const [LikeAction, setLikeAction] = useState(null);
  const [likeIcon, setLikeIcon] = useState(HeartOutlined);

  let obj = {};
  if (photoId) {
    obj = { photoId: photoId, userId: currentUserId };
  }

  useEffect(() => {
    Axios.post("/api/likes/getLikes", obj).then((response) => {
      // Axios.post("/api/likes", obj).then((response) => {
      if (response.data.success) {
        setLikes(response.data.likes.length);
        if (response.data.likes.map((like) => like.userId).includes(userId)) {
          setLikeIcon(HeartFilled);
        } else if (
          !response.data.likes.map((like) => like.userId).includes(userId) &&
          response.data.likes.length > 0
        ) {
          setLikeIcon(HeartFilled);
        }
      } else {
        alert("Could not get likes");
      }
    });
  }, []);

  let likeIds = [];
  let dislikeIds = [];
  Axios.post("/api/likes/getLikes", obj).then((response) => {
    // Axios.post("/api/likes", obj).then((response) => {
    if (response.data.success) {
      likeIds = response.data.likes.map((like) => like.userId);
    }
  });

  const onLike = () => {
    if (
      LikeAction === null &&
      !likeIds.includes(userId) &&
      !dislikeIds.includes(userId)
    ) {
      Axios.post("/api/likes/upLike", obj).then((response) => {
        // Axios.post("/api/likes", obj).then((response) => {
        if (response.data.success) {
          setLikes(Likes + 1);
          setLikeAction("liked");
          setLikeIcon(HeartFilled);
        } else {
          alert("You already like this photo.");
        }
      });
    } else if (
      LikeAction === null &&
      !likeIds.includes(userId) &&
      dislikeIds.includes(userId)
    ) {
      Axios.post("/api/likes/upLike", obj).then((response) => {
        // Axios.post("/api/likes", obj).then((response) => {
        if (response.data.success && dislikeIds.length >= 2) {
          setLikes(Likes + 1);
          setLikeAction("liked");
          setLikeIcon(HeartFilled);
        } else if (response.data.success && dislikeIds.length === 1) {
          setLikes(Likes + 1);
          setLikeAction("liked");
          setLikeIcon(HeartFilled);
        } else {
          alert("You already liked this photo.");
        }
      });
    } else {
      Axios.post("/api/likes/unLike", obj).then((response) => {
        // Axios.post("/api/likes", obj).then((response) => {
        if (response.data.success && likeIds.length === 1) {
          setLikes(Likes - 1);
          setLikeAction(null);
          setLikeIcon(HeartOutlined);
        } else if (response.data.success && likeIds.length > 1) {
          setLikes(Likes - 1);
          setLikeAction(null);
          setLikeIcon(HeartFilled);
        } else {
          alert("Could not unlike this photo.");
        }
      });
    }
  };

  return (
    <React.Fragment>
      <div className="photo-like-dislikes">
        <span key="photo-like" className="photo-like">
          <Tooltip>
            <Icon component={likeIcon} onClick={onLike} />
          </Tooltip>
          <span style={{ paddingLeft: "10px", cursor: "auto" }}>{Likes}</span>
        </span>
      </div>
    </React.Fragment>
  );
};

export default Likes;
