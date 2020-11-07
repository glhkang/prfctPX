import React from "react";
import { Link } from "react-router-dom";

// class AllPhotos extends React.Component {
//   likeButton() {
//     // const { like, photo, createLike, deleteLike, userId } = this.props;
//     const { photo, currentUser } = this.props;
//     // let liked = false;
//     // let count = 0;
//     // let photoLikeId = [];

//     // if (like) {
//     //   for (let i = 0; i < like.length; i++) {
//     //     if (photo.id === like[i].photo_id) {
//     //       photoLikeId.push(like[i].id);
//     //       count++;
//     //       liked = true;
//     //     }
//     //   }
//   }

//   //   return liked ? (
//   //     <div className="heart-title">
//   //       <div>
//   //         <button
//   //           className="heart-button"
//   //           onClick={() => deleteLike(photoLikeId[0])}
//   //         >
//   //           {<i className="fas fa-heart"></i>}
//   //         </button>
//   //       </div>
//   //       <div>{photo.title}</div>
//   //     </div>
//   //   ) : (
//   //     <div className="heart-title">
//   //       <div>
//   //         <button
//   //           className="heart-button"
//   //           onClick={() => createLike(userId, photo.id)}
//   //         >
//   //           {<i className="far fa-heart"></i>}
//   //         </button>
//   //       </div>
//   //       <div>{photo.title}</div>
//   //     </div>
//   //   );
//   // }

//   render() {
//     const { photo } = this.props;
//     return (
//       <li className="photo-index-img-li">
//         <div className="like-container">
//           <Link to={`/photos/${photo.id}`}>
//             <img className="photo-index-image" src={photo.photoUrl} />
//           </Link>
//         </div>
//       </li>
//     );
//   }
// }

///////////////

const AllPhotos = (props) => {
  const { photo } = props;

  return (
    <li className="photo-index-img-li">
      <div className="like-container">
        <Link to={`/photos/${photo.id}`}>
          <img className="photo-index-image" src={photo.photoUrl} />
        </Link>
      </div>
    </li>
  );
};

export default AllPhotos;
