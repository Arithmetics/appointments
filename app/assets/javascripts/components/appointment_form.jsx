class AppointmentForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: "Some thing",
      aptTime: "Tomorrow at 3"
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let name = e.target.name;
    let obj = {};
    obj[name]= e.target.value;
    this.setState(
      obj, () => {
        this.props.onUserInput(
          this.state
        )
      }
    )
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onFormSubmit();
  }

  render(){

    return (
        <form onSubmit={this.handleSubmit}>
          <input name='title' placeholder='Title' value={this.state.title} onChange={this.handleChange}/>
          <input name='aptTime' placeholder="Date and Time" value={this.state.aptTime} onChange={this.handleChange}/>
          <input type='submit' value='Make Appointment'/>
        </form>
    )
  }
}
