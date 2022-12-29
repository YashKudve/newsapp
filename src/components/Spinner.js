import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" /><br />
        <h2>Loading...</h2>
      </div>
    )
  }
}

export default Spinner
