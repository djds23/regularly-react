import React from 'react'

const FBLike = ({albumLink}) => (
  <div
    className="fb-like"
    data-href={albumLink}
    data-layout="button"
    data-action="like"
    data-size="small"
    data-show-faces="true"
    data-share="false">
  </div>
)

export default FBLike
