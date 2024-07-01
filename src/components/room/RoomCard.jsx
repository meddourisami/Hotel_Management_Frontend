import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RoomCard = ({room}) => {
  return (
    <Col key={room.id} className='mb-3' xs={12}>
        <Card>
            <Card.Body className='d-flex flex-wrap align-items-center p-2'>
                <div className='flex-shrink-0 mr-2 mb-2 mb-md-0'>
                    <Card.Img
                          variant='top'
                          src={`data:image/png;base64,${room.photo}`}
                          alt="Room Photo"
                          style={{ width: "100%", maxWidth: "200px", height:"auto" }}/>
                          
                </div>
                <div className='flex-grow-1 ml-2 px-3'>
                    <Card.Title className='hotel-coler'>
                        {room.roomType}
                    </Card.Title>
                    <Card.Title className='room-price'>
                        {room.roomPrice}$ per night
                    </Card.Title>
                    <Card.Text>
                        Room Info 
                    </Card.Text>  
                </div>
                <div className='flex-shrink-0 mt-3'>
                    <Link to={`/bookings/${room.id}`} className='btn btn-hotel btn-sm'>
                        View/Book Now
                    </Link>
                </div>  
            </Card.Body>      
        </Card>      
    </Col>
  )
}

export default RoomCard