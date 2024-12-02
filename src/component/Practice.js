import React, { PureComponent } from 'react'

class Practice extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
apiData : [],
    }
  }

  componentDidMount(){

    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      this.setState({apiData : data.results
      })


    });



  }

  render() {
    const {apiData} = this.state;
    return (
      <>
<div>
zzz

  <select>
    <label>Namess</label>
    {apiData.map((item, index) => (
    <option value={item.name}>{item.name}</option>
  ))}
  </select>


</div>

      </>
    )
  }
}

export default Practice