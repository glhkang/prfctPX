import React from "react";
import { Link } from "react-router-dom";

class AllPhotos extends React.Component {
  likeButton() {
    // const { like, post, createLike, deleteLike, userId } = this.props;
    const { photo, currentUser } = this.props;
    // let liked = false;
    // let count = 0;
    // let postLikeId = [];

    // if (like) {
    //   for (let i = 0; i < like.length; i++) {
    //     if (post.id === like[i].post_id) {
    //       postLikeId.push(like[i].id);
    //       count++;
    //       liked = true;
    //     }
    //   }
  }

  //   return liked ? (
  //     <div className="heart-title">
  //       <div>
  //         <button
  //           className="heart-button"
  //           onClick={() => deleteLike(postLikeId[0])}
  //         >
  //           {<i className="fas fa-heart"></i>}
  //         </button>
  //       </div>
  //       <div>{post.title}</div>
  //     </div>
  //   ) : (
  //     <div className="heart-title">
  //       <div>
  //         <button
  //           className="heart-button"
  //           onClick={() => createLike(userId, post.id)}
  //         >
  //           {<i className="far fa-heart"></i>}
  //         </button>
  //       </div>
  //       <div>{post.title}</div>
  //     </div>
  //   );
  // }

  render() {
    const { photo } = this.props;
    return (
      <li className="post-index-img-li">
        <div className="like-container">
          <Link to={`/photos/${photo.id}`}>
            <img className="photo-index-image" src={photo.photoUrl} />
          </Link>
        </div>
      </li>
    );
  }
}

export default AllPhotos;
