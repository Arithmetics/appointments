//entry point @appointments = this.props.appointments

class Appointments extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: "Team Standup",
      aptTime: "Tomorrow at 9am"
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewAppointment = this.addNewAppointment.bind(this);
  }

  handleUserInput(obj) {
    this.setState(obj);
  }

  addNewAppointment(data) {
    console.log(React.addons);
    let appointments = React.addons.update(this.state.appointments, { $push: [appointment]});
    this.setState({ appointments: appointments});
  }


  handleFormSubmit() {
    const appointment = {title: this.state.title, apt_time: this.state.aptTime}
    $.post('/appointments',
           {appointment: appointment})
           .done(function(data){
             this.addNewAppointment(data);
           }.bind(this));
  }

  render(){
    return(
      <div>
        <AppointmentForm
          inputTitle={this.state.inputTitle}
          inputAptTime={this.state.inputAptTime}
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit}
        />
        <AppointmentsList appointments={this.state.appointments}/>
      </div>
    )
  }

}
