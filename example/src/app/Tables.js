import React, { Component } from "react";
import { Table, Button, Input } from "turtle-ui";

const tableHeaders = ["Name", "Home", "Active", "Age"];

const tableValues = [
  ["African Aquatic Sideneck Turtle", "Africa", "Daytime", "25 years"],
  ["Central American Wood Turtle", "Mexico, Costa Rica", "", ""],
  ["Painted Turtle", "North America", "Daytime", "55 years"],
  ["Red Ear Slider Turtle", "Gulf of Mexico", "", "50-70 years"],
  ["Reeve’s Turtle", "China, North and South Korea", "", "10-15 years"],
];

class Tables extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      filteredValues: tableValues,
      pageValues: [],
      tableLimit: 2,
      tablePage: 0,
    };
  }

  /* for pagination demo */
  nextPage = () => {
    var pages = this.state.filteredValues.length / this.state.tableLimit;
    var page = this.state.tablePage + 1;

    if (page < pages) {
      this.updatePage(page);
    }
  };

  previousPage = () => {
    var page = this.state.tablePage - 1;

    if (page >= 0) {
      this.updatePage(page);
    }
  };

  updatePage = (p) => {
    console.log(p);
    var tableStart = p * this.state.tableLimit;
    var tableEnd = tableStart + this.state.tableLimit;

    var pageValues = this.state.filteredValues.slice(tableStart, tableEnd);
    this.setState({ pageValues: pageValues, tablePage: p });
  };

  onSearchChange = (event) => {
    const target = event.target;
    const value = target.value;
    var newFiltered = [];

    if (value === "") {
      newFiltered = tableValues;
    } else {
      newFiltered = tableValues.filter(function (tv, index) {
        return (
          tv[0].indexOf(value) > -1 ||
          tv[1].indexOf(value) > -1 ||
          tv[2].indexOf(value) > -1 ||
          tv[3].indexOf(value) > -1
        );
      });
      console.log(newFiltered);
    }

    this.setState(
      {
        searchText: value,
        filteredValues: newFiltered,
      },
      () => this.updatePage(0)
    );
  };

  componentDidMount = () => {
    this.updatePage(0);
  };

  getTablePageButtons = (pages) => {
    var buttons = [];
    buttons.push(
      <Button classes="text plain btn-small" onClick={this.previousPage}>
        Previous
      </Button>
    );
    for (var i = 0; i < pages; i++) {
      var color = i === this.state.tablePage ? "information" : "text plain";
      (function (th) {
        var index = i;
        buttons.push(
          <Button
            classes={color + " btn-small"}
            onClick={() => th.updatePage(index)}
          >
            {i + 1}
          </Button>
        );
      })(this);
    }
    buttons.push(
      <Button classes="text plain btn-small" onClick={this.nextPage}>
        Next
      </Button>
    );
    return buttons;
  };

  render() {
    var tableStart = this.state.tablePage * this.state.tableLimit + 1;
    var tableEnd = tableStart + this.state.tableLimit - 1;
    var pages = this.state.filteredValues.length / this.state.tableLimit;
    if (tableEnd > this.state.filteredValues.length - 1)
      tableEnd = this.state.filteredValues.length;
    var buttons = this.getTablePageButtons(pages);

    return (
      <div>
        <h1>Tables</h1>

        <h3>Pagination and Filter</h3>
        <div className="grid grid-1">
          <Table
            classes="hover condensed"
            title={
              <div className="grid grid-2 vertical-align">
                <h3 style={{ margin: 0 }}>Turtles</h3>
                <div>
                  <Input
                    classes="small"
                    placeholder="Search..."
                    onChange={this.onSearchChange}
                  />
                </div>
              </div>
            }
            headers={tableHeaders}
            values={this.state.pageValues}
            footer={
              <div className="grid grid-2 vertical-align">
                <div>
                  Showing {tableStart} to {tableEnd} of{" "}
                  {this.state.filteredValues.length} entries
                  {this.state.searchText &&
                    " (filtered from " + tableValues.length + ")"}
                </div>
                <div className="pull-right">
                  {buttons.map(function (btn, index) {
                    return btn;
                  })}
                </div>
              </div>
            }
          />
        </div>

        <h3>Default</h3>
        <div className="grid grid-1">
          <Table classes="hover" headers={tableHeaders} values={tableValues} />
        </div>

        <h3>Condensed</h3>
        <div className="grid grid-1">
          <Table
            classes="hover condensed"
            headers={tableHeaders}
            values={tableValues}
          />
        </div>

        <h3>Title</h3>
        <div className="grid grid-1">
          <Table
            classes="hover condensed"
            title={<h3 style={{ margin: 0 }}>Turtle Species</h3>}
            headers={tableHeaders}
            values={tableValues}
          />
        </div>

        <h3>No Headers</h3>
        <div className="grid grid-1">
          <Table
            classes="hover condensed"
            title={<h3 style={{ margin: 0 }}>Turtle Species</h3>}
            values={tableValues}
          />
        </div>

        <h3>Footer</h3>
        <div className="grid grid-1">
          <Table
            classes="hover condensed"
            headers={tableHeaders}
            values={tableValues}
            footer={<div style={{ textAlign: "center" }}>table footer</div>}
          />
        </div>
      </div>
    );
  }
}

export default Tables;
