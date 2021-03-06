import React from 'react'

class Pet extends React.Component {



  clickHandler = (e) =>{
    this.props.onAdoptPet(e)

  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { this.props.pet.isAdopted === true &&
            <button className="ui disabled button">Already adopted</button>
          }
          { this.props.pet.isAdopted === false &&
          <button className="ui primary button" onClick={() => this.clickHandler(this.props.pet.id)}>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
