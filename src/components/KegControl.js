import React from 'react';
import KegList from './KegList'
import NewKegForm from './NewKegForm'
import { v4 } from 'uuid';

class KegControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
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
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewKegToList = (newKeg) => {
    const newKegList = this.state.kegList.concat(newKeg);
    this.setState({
      kegList: newKegList,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm 
      onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList 
      kegList={this.state.kegList} 
      onKegSelection={this.handleChangingSelectedKeg}/>
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