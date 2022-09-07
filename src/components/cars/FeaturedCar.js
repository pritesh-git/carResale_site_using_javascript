import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import CarCards from './CarCards'
import { getData } from '../../services/DataService'

const FeaturedCar = () => {
  const [cars, setCars] = useState([])
  useEffect(() => {
    getData().then(data => {
      setCars(data.cars)
    })
  }, [])

  return (
    <Container className="p-2">
      <Row className="font-monospace text-center mt-5 mb-3">
        <h1>Featured Cars</h1>
      </Row>
      <CarCards cars={cars} />
    </Container>
  )
}
export default FeaturedCar
