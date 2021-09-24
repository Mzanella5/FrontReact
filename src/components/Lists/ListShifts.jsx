import React, { Component } from "react";


class ListShifts extends Component {
  render() {
    return (
      <ul>
        {this.props.listShift.map((shift, id) => {
          return (
            <li key={id}>
              <details>
                <summary>
                  Shift: {shift.startAt} at {shift.endAt}
                </summary>
                <p>
                  dayOfWeek: <b>{shift.dayOfWeek}</b>
                </p>
                <p>
                  storeId: <b>{shift.storeId}</b>
                </p>
                <details>
                  <summary>Store: {shift.store.description}</summary>
                  <p>
                    lastUpdate: <b>{shift.store.lastUpdate}</b>
                  </p>
                </details>
              </details>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListShifts;
