class AppointmentsList extends React.Component {
  render(){
    return(
      <div>
        {this.props.appointments.map(function(appointment, i){
          return(
            <div key={i}>
              <Appointment appointment={appointment} />
            </div>
          )
        })}
      </div>
    )
  }

}
