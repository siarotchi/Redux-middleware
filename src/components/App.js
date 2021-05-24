import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Navbar from "./Navbar";
import Main from "./Main";
import { connect } from "react-redux";
import { selectSubredditType, fetchResourcesType } from "../store/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFilterSelect = this.handleFilterSelect.bind(this);
  }

  componentDidMount() {
    const { dispatch, selectedFilter, loading } = this.props;
    if (loading) {
      return;
    }
    dispatch(fetchResourcesType(selectedFilter));
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedFilter !== prevProps.selectedFilter) {
      const { dispatch, selectedFilter, loading } = this.props;
      if (loading) {
        return;
      }
      dispatch(fetchResourcesType(selectedFilter));
    }
  }

  handleFilterSelect(selectedFilter) {
    this.props.dispatch(selectSubredditType(selectedFilter));
  }

  render() {
    const { loading, entities, filters, selectedFilter } = this.props;
    return (
      <div className="App d-flex flex-column">
        <Navbar />
        <Main
          loading={loading}
          entities={entities}
          filters={filters}
          selectedFilter={selectedFilter}
          onSelectFilter={this.handleFilterSelect}
        />
      </div>
    );
  }
}

App.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  entities: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  filters: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { filters, entities } = state;
  const { loading, itemsList } = entities;
  const { itemsMap, selected } = filters;
  return {
    loading,
    filters: Object.values(itemsMap),
    entities: itemsList,
    selectedFilter: selected
  };
}

export default connect(mapStateToProps)(App);
