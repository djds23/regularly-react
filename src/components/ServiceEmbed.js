import React from 'react'

class ServiceEmbed extends React.Component {
  iframe() {
    return {
      __html: this.props.embed
    }
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={this.iframe()} />
    )
  }
}

export default ServiceEmbed
