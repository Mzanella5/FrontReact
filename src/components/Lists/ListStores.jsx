import React, { Component } from "react";
import CardShift from "../Cards/CardShift";

class ListStores extends Component {
  render() {
    return (
      <ul>
        {this.props.listStore.map((store, id) => {
          return (
            <li key={id}>
              <details>
                <summary>Store: {store.description}</summary>
                <p>
                  lastUpdate: <b>{store.lastUpdate}</b>
                </p>
                <p>
                  limitedMaxNumberPeopleInStore:{" "}
                  <b>{store.limitedMaxNumberPeopleInStore.toString()}</b>
                </p>
                <p>
                  maxNumberPeopleInStore: <b>{store.maxNumberPeopleInStore}</b>
                </p>
                <CardShift shifts={store.shifts} />
              </details>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListStores;
