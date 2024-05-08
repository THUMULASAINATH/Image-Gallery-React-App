import React from 'react'
import { Container } from 'react-bootstrap'

const Gallery = ({data}) => {
  return (
    <Container>
     <div className="row">
        {data.map((image) => 
         
            <div key={image.id} className="col-md-4">
                    <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} />
            </div>
           
        )}
      </div>
    </Container>
  )
}

export default Gallery
