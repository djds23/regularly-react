import React from 'react'

class ServiceEmbed extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.serviceName}</p>
        <div dangerouslySetInnerHTML={this.props.embed} />
      </div>
    )
  }
}

export default ServiceEmbed
