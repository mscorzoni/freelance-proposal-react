import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './documents.css'

class Documents extends Component {
  constructor(props){
    super(props)
    this.state = {
      freelance_documents: []
    }
  }


  componentDidMount(){
    axios.get('http://localhost:3001/api/v1/freelance_documents.json')
    .then(response => {
      console.log(response)
      this.setState({
        freelance_documents: response.data
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
            <div className="Lists-container">
              {this.state.freelance_documents.map( freelance_document => {
                return(
                  <div className="card" key={freelance_document.id}>
                    <img className="card-img-top" src={freelance_document.image_url} alt="Card image cap" width="100%" />
                    <div className="card-block">
                      <h4 className="card-title">{freelance_document.title}</h4>
                      <p className="card-text">{freelance_document.description}</p>
                      <div>
                        <a className="btn btn-lg btn-primary" href={freelance_document.file_url}>Download File</a>
                      </div>
                      <p className="cart-text"><small className="text-muted">{freelance_document.updated_at}</small></p>
                    </div>
                  </div>
                  )
              })}
            </div>
        )
  }
}
export default Documents;
