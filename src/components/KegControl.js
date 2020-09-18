import React from 'react';
import KegList from './KegList'
import NewKegForm from './NewKegForm'
import KegDetail from './KegDetail'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class KegControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedKeg: null,
    }
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg)
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.kegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleSellingPint = (soldKeg) => {
    if (soldKeg.pints > 0) {
      const { dispatch } = this.props;
      const action = a.addKeg(Object.assign({}, soldKeg, { pints: parseInt(soldKeg.pints - 1)}));
      dispatch(action)
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = 
      <KegDetail 
      keg = {this.state.selectedKeg} />
      buttonText = "Return to Keg List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm 
      onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList 
      kegList={this.props.kegList} 
      onKegSelection={this.handleChangingSelectedKeg}
      onSellPint={this.handleSellingPint}/>
      buttonText = "Add Keg";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

KegControl.propTypes = {
  masterTicketList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    kegList: state.kegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl