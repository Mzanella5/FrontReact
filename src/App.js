import { Component } from "react";
import ListStores from "./components/Lists/ListStores";
import ListShifts from "./components/Lists/ListShifts";
import React from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      listStore: [],
      listShift: [],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  getStores(searchString) {
    fetch("http://localhost:5000/store/find/" + searchString)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ listStore: data });
        console.log(data);
      });
  }

  getShifts(searchString) {
    fetch("http://localhost:5000/shift/find/" + searchString)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ listShift: data });
        console.log(data);
      });
  }

  componentDidMount() {
    this.getStores("");
    this.getShifts("");
  }

  _handleChangeSearchBarStore(event) {
    event.stopPropagation();
    this.getStores(event.target.value);
  }

  _handleChangeSearchBarShift(event) {
    event.stopPropagation();
    this.getShifts(event.target.value);
  }

  render() {
    return (
      <section >
        <details >
          <summary>Stores</summary>
          <input
            type="text"
            placeholder="Search Bar"
            onChange={this._handleChangeSearchBarStore.bind(this)}
          ></input>
          {/* <FormRegister criarNota={this.criarNota.bind(this)} /> */}
          <ListStores listStore={this.state.listStore} />
        </details>
        <details>
          <summary>Shifts</summary>
          <input
            type="text"
            placeholder="Search Bar"
            onChange={this._handleChangeSearchBarShift.bind(this)}
          ></input>
          <ListShifts listShift={this.state.listShift} />
        </details>
      </section>
    );
  }
}

export default App;
