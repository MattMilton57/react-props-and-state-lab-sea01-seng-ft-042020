import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  filterPets = () => {
    if (this.state.filters.type == 'all')
      {this.fetchPets('/api/pets')}
  }

  fetchPets = (api) => {
    fetch(api)
      .then ((res) => res.json())
      // .then ((res) => (console.log(res)))
      .then ((pets) => {
        this.setState({
          pets: pets
        })
      })
  }

  testFunc = () => {
    console.log("func")
  }

  updateFilterType = (newType) => {
    console.log("updateFilters")
    this.setState({
      filters: {
        ...this.state.filters,
        type:newType
      }
    },
    () => this.filterPets())

  }

  onAdoptPet = (e) => {
    
    console.log(e)
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filter={this.updateFilterType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App


// X // The app's initial state is already defined. App has two children: the <Filters /> and <PetBrowser /> components.

// X // App should pass a callback prop, onChangeType, to <Filters />. This callback needs to update <App />'s state.filters.type

// <Filters /> needs a callback prop, onFindPetsClick. When the <Filters /> component calls onFindPetsClick, <App /> should fetch a list of pets using fetch().

// Assuming your app is up and running, you can make a fetch to this exact URL: /api/pets with an optional query parameter to get your data.
// Use App's state.filters to control/update this parameter
// If the type is 'all', send a request to /api/pets
// If the type is 'cat', send a request to /api/pets?type=cat. Do the same thing for dog and micropig.
// The pet data received will include information on individual pets and their adoption status.
// Set <App/>'s state.pets with the results of your fetch request so you can pass the pet data down as props to <PetBrowser />
// Even though we're using fetch here, its responses have been mocked in order to make the tests work properly. That means it's 
// important to use the exact URLs as described above, or your tests will fail!
// Finally, App should pass a callback prop, onAdoptPet, to <PetBrowser />. This callback should take in an id for a pet, find 
// the matching pet in state.pets and set the isAdopted property to true.