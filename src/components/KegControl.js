import React from 'react';
import KegList from './KegList'
import NewKegForm from './NewKegForm'
import KegDetail from './KegDetail'
import { v4 } from 'uuid';

class KegControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      kegList: [
        {
          id: v4(),
          name: "Bottom Shelf Brew",
          brand: "OnTap",
          pints: 64,
          price: 3,
          alcoholContent: 4
        },
        {
          id: v4(),
          name: "Middle of the Line",
          brand: "OnTap",
          pints: 124,
          price: 4,
          alcoholContent: 5
        },
        {
          id: v4(),
          name: "Top Shelf Brew",
          brand: "OnTap",
          pints: 32,
          price: 5,
          alcoholContent: 6
        }
      ]
    }
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newKegList = this.state.kegList.concat(newKeg);
    this.setState({
      kegList: newKegList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.kegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleSellingPint = (soldKeg) => {
    if (soldKeg.pints > 0) {
      this.setState(prevState => ({
        kegList: prevState.kegList.map(
          (keg, index) => (keg.id === soldKeg.id ? Object.assign({}, this.state.kegList[index], { pints: parseInt(soldKeg.pints - 1) }) : keg)
        )
      }));
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
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm 
      onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList 
      kegList={this.state.kegList} 
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

export default KegControl