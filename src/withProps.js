const React = require('react')

const withProps = (Wrapped, preset) => {
  class Wrapper extends React.Component {
    constructor (props) {
      super(props)
      this.getState = this.getState.bind(this)
      this.childRef = React.createRef()
    }
    getState () {
      return this.childRef.current.getState()
    }
    render () {
      return (
        <Wrapped {...preset} {...this.props} ref={this.childRef} />
      )
    }
  }
  return Wrapper
}

module.exports = withProps
