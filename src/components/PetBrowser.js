import React from 'react'

import Pet from './Pet'




class PetBrowser extends React.Component {

  sendPets = () => {
    // return this.props.pets.map(pet => <Pet type={pet.type}/>)
    return this.props.pets.map(pet => <Pet onAdoptPet={this.props.onAdoptPet} pet={pet}/>)

  }

  render() {
    // return <div className="ui cards"><Pet /></div>
    return <div className="ui cards">{this.sendPets()}</div>

  }
}

export default PetBrowser
