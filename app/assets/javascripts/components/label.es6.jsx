class Label extends React.Component {
  render () {
    return (
      <div>
        <div>Label: {this.props.label}</div>
      </div>
    );
  }
}

Label.propTypes = {
  label: PropTypes.string
};

