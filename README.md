# PrfctPX

## **Background and Overview**

PrfctPX, inspired by 500px, is an app for inspiration and creative discovery, where photographers share their own work and explore others. &nbsp;&nbsp;&nbsp;&nbsp;

[Live Demo](https://bit.ly/prfctpx) &nbsp;&nbsp;&nbsp;&nbsp;

![PrfctPX Preview](/app/assets/images/prfctpx.gif "PrfctPX Preview")

## **Architecture and Technologies**

PrfctPX was built using:

- JavaScript
- AWS S3
- React
- React Hooks
- Redux
- Ruby on Rails
- PostgreSQL
- Webpack
- Sass and CSS

## **Features**

### AWS S3

---

Upload images directly to AWS S3 with custom upload form input, which is then organized and attached to its respective ActiveRecord object.
&nbsp;&nbsp;&nbsp;&nbsp;

![PrfctPX Upload Preview](/app/assets/images/prfctpx-upload.gif "PrfctPX Upload Preview")

### Full User Authentication

---

Users can sign up, log in, and log out knowing that their session will be secure thanks to Rails cookies. Issues upon signing up, logging in, and logging out are handled via error handling and validations.

### Likes

---

A `GET` request is made after the first render and after every update thanks to the `useEffect()` hook that is unique to React Hooks. The Effect Hook then performs these actions: fetches likes data, manually changes the DOM, and alerts user of errors. From the returned `responseData`, the `photoLikes` count for each photo can be set. If the current user liked a photo, then the `likeIcon` will be set to `HeartTwoTone` but if not, then it will be set to `HeartOutlined`. Otherwise, if there is an issue, an alert will notify the user that the likes could not be retrieved.

```javascript
useEffect(() => {
  Axios.get("/api/likes", obj).then((response) => {
    responseData = Object.values(response.data);
    let relevantResponseData = responseData.filter(
      (like) => like.user_id === currentUserId && like.photo_id === photoId
    );

    if (response.data && currentUserId) {
      let photoLikes = responseData.filter((like) => like.photo_id === photoId)
        .length;
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
```

### `@extend` Through Inheritance

---

Sass's `@extend` allows `%fit-image` to be shared from one selector to another.

```css
%fit-image {
  display: block;
  max-width: 100%;
  object-fit: contain;
  max-height: fit-content;
}

.photo-index-photos img {
  @extend %fit-image;
}

.homefeed img {
  @extend %fit-image;
}
```
