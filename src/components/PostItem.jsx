import React, { forwardRef } from "react";
import MyButton from "./UI/button/Mybutton";

const PostItem = forwardRef((props, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <p className="post__info">{props.post.body}</p>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  );
});

export default PostItem;
