import React, { useEffect, useState } from "react";
import { Tooltip } from "antd";
import Axios from "axios";

const Follows = ({ followerId }) => {
  const [Follows, setFollows] = useState(0);
  const [FollowAction, setFollowAction] = useState(null);
  const [followButton, setFollowButton] = useState(button);

  //will this work?
  let button = <button className="follow-button">Follow</button>;

  let obj = {};
  //user_id is the person that is being followed, follower_id the person doing the following (currentUserId)
  if (followerId) {
    obj = { follower_id: followerId };
  }

  //this is an array of all like objects
  let responseData = [];

  return <React.Fragment></React.Fragment>;
};

export default Follows;
