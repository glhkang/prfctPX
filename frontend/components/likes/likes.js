import React, { useEffect, useState } from "react";
import { Tooltip } from "antd";
import Icon, {
  HeartOutlined,
  HeartTwoTone,
  setTwoToneColor,
} from "@ant-design/icons";
import Axios from "axios";

const Likes = ({ photoId, userId, currentUserId }) => {
  const [Likes, setLikes] = useState(0);
  const [LikeAction, setLikeAction] = useState(null);
  const [likeIcon, setLikeIcon] = useState(HeartOutlined);
  setTwoToneColor("#FF0000");

  let obj = {};
  //userId is the photo.photographer_id, currentUserId is the currentUser.id
  if (photoId) {
    obj = { photo_id: photoId, user_id: currentUserId };
  }

  //this is an array of all like objects
  let responseData = [];

  useEffect(() => {
    Axios.get("/api/likes", obj).then((response) => {
      responseData = Object.values(response.data);
      let relevantResponseData = responseData.filter(
        (like) => like.user_id === currentUserId && like.photo_id === photoId
      );

      if (response.data && currentUserId) {
        let photoLikes = responseData.filter(
          (like) => like.photo_id === photoId
        ).length;
        setLikes(photoLikes);
        if (relevantResponseData.length > 0) {
          setLikeIcon(HeartTwoTone);
        } else if (relevantResponseData.length === 0) {
          setLikeIcon(HeartOutlined);
        }
      } else {
        alert("Could not get likes");
      }
    });
  }, []);

  //the ids of all users who liked all photos
  let likerIds = [];
  Axios.get("/api/likes", obj).then((response) => {
    responseData = Object.values(response.data);

    if (response.data && currentUserId) {
      likerIds = responseData.map((like) => like.user_id);
    }
  });

  const onLike = () => {
    let relevantResponseData = responseData.filter(
      (like) => like.user_id === currentUserId && like.photo_id === photoId
    );

    if (relevantResponseData.length === 0 && LikeAction === null) {
      Axios.post("/api/likes", obj).then((response) => {
        if (response.data && currentUserId) {
          setLikes(Likes + 1);
          setLikeAction("liked");
          setLikeIcon(HeartTwoTone);
        } else {
          alert("You already like this photo.");
        }
      });
    } else {
      if (relevantResponseData.length === 1) {
        let likeId = relevantResponseData[0].id;

        Axios.delete(`/api/likes/${likeId}`, obj).then((response) => {
          if (response.data && currentUserId) {
            setLikes(Likes - 1);
            setLikeAction(null);
            setLikeIcon(HeartOutlined);
          } else {
            alert("Could not unlike this photo.");
          }
        });
      } else {
        console.log("Unable to delete");
      }
    }
  };

  return (
    <React.Fragment>
      <div className="photo-like-dislikes">
        <span key="photo-like" className="photo-like">
          <Tooltip>
            <Icon component={likeIcon} onClick={onLike} />
          </Tooltip>
          <span style={{ paddingLeft: "10px", cursor: "auto" }}>
            {Likes}
            {/* {totalLikes} */}
          </span>
        </span>
      </div>
    </React.Fragment>
  );
};

export default Likes;
