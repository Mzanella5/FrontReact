import React, { Component } from "react";

class CardShift extends Component {
  render() {
    return (
      <section>
        {this.props.shifts.map((shift, id) => {
          return (
            <div key={id}>
              <p><b>Shift {id}</b> - Start at: {shift.startAt} end at: {shift.endAt}</p>
            </div>
          );
        })}
      </section>
    );
  }
}

export default CardShift;
