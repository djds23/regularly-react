import React from 'react'
import ReactDOM from 'react-dom'

class FBLike extends React.Component {
  render() {
    return (
      <div
        className="fb-like"
        data-href={this.props.albumLink}
        data-layout="button"
        data-action="like"
        data-size="small"
        data-show-faces="true"
        data-share="false">
      </div>
    )
  }

  componentDidMount() {
    let like = ReactDOM.findDOMNode(this)
    this.renderXFBMLIfPossible(like)
  }

  renderXFBMLIfPossible(rawDOMElement) {
    let sdkLoaded = !(window.FB == null)
    if (sdkLoaded) {
      window.FB.XFBML.parse(rawDOMElement.parentNode)
    }
  }
}

export default FBLike
