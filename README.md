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

Upload images directly to AWS S3 with custom upload form input, which is then organized and attached to it's respective ActiveRecord object.

### Full User Authentication

---

Users can sign up, log in, and log out knowing that their session will be secure thanks to Rail cookies. Issues upon signing up, logging in, and logging out are handled via error handling and validations.

### Likes/Dislikes

---

The Effect Hook performs side effects (fetches likes data, manually changes the DOM, alerts user of errors ) after every render. The `useEffect()` hook is unique to React Hooks.

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

```sass
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
