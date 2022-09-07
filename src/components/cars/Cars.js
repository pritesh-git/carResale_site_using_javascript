import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { getData } from '../../services/DataService'
import CarCards from './CarCards'

const uniqueValues = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

const iState = {
  cars: [],
  sortedCars: [],
  type: 'all',
  types: [],
  city: 'all',
  cities: [],
  carMake: 'all',
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  GPS: false,
  Sport: false,
  manufacturers: [],
}

const Cars = () => {
  const [carsInfo, setCarsInfo] = useState(iState)

  useEffect(() => {
    getData().then(data => {
      const results = data.cars
      const minPrice = Math.min(...results.map(val => val.price))
      const maxPrice = Math.max(...results.map(val => val.price))

      let types = uniqueValues(results, 'type')
      types = ['all', ...types]

      let cities = uniqueValues(results, 'city')
      cities = ['all', ...cities]

      let manufacturers = uniqueValues(results, 'carMake')
      manufacturers = ['all', ...manufacturers]
      const tempList = {
        ...carsInfo,
        cars: results,
        sortedCars: results,
        price: maxPrice,
        minPrice,
        maxPrice,
        types,
        manufacturers,
        cities,
      }
      setCarsInfo(tempList)
    })
  }, [])

  const handleChange = e => {
    const target = e.target

    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    carsInfo[name] = value
    setCarsInfo(carsInfo)
    filterCars()
  }

  const filterCars = () => {
    const { cars, price, type, carMake, GPS, Sport, city } = carsInfo
    let tempCars = [...cars]
    if (type !== 'all') {
      tempCars = tempCars.filter(car => car.type === type)
    }
    if (carMake !== 'all') {
      tempCars = tempCars.filter(car => car.carMake === carMake)
    }
    if (city !== 'all') {
      tempCars = tempCars.filter(car => car.city === city)
    }
    if (price !== 0) {
      tempCars = tempCars.filter(car => car.price <= price)
    }
    if (GPS) {
      tempCars = tempCars.filter(car => car.GPS === true)
    }
    if (Sport) {
      tempCars = tempCars.filter(car => car.Sport === true)
    }
    var tempData = { ...carsInfo, sortedCars: tempCars }
    setCarsInfo(tempData)
  }

  return (
    <Container fluid className="p-5">
      <Row className="mb-5">
        <Container fluid>
          <Row className="font-monospace text-center mt-5 mb-3">
            <h1>Search Cars</h1>
          </Row>
          <Row className="text-center mt-5 mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Car Type</Form.Label>
                <Form.Select
                  aria-label="select type"
                  name="type"
                  onChange={e => handleChange(e)}>
                  {carsInfo.types.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    )
                  })}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Select
                  aria-label="select city"
                  name="city"
                  onChange={e => handleChange(e)}>
                  {carsInfo.cities.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    )
                  })}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Brands</Form.Label>
                <Form.Select
                  aria-label="select brand"
                  name="carMake"
                  onChange={e => handleChange(e)}>
                  {carsInfo.manufacturers.map((manufacturer, index) => {
                    return (
                      <option key={index} value={manufacturer}>
                        {manufacturer}
                      </option>
                    )
                  })}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>
                  Price: <small>{carsInfo.price}</small>
                </Form.Label>
                <Form.Range
                  step={(carsInfo.maxPrice - carsInfo.minPrice) / 100}
                  name="price"
                  value={carsInfo.price}
                  onChange={e => handleChange(e)}
                  min={carsInfo.minPrice}
                  max={carsInfo.maxPrice}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <div
                  key={`inline-checkbox`}
                  className="mb-3"
                  onChange={e => handleChange(e)}>
                  <Form.Check
                    inline
                    label="GPS"
                    name="GPS"
                    type={'checkbox'}
                    id={`inline-checkbox-1`}
                  />
                  <Form.Check
                    inline
                    label="Sport"
                    name="Sport"
                    type={`checkbox`}
                    id={`inline-checkbox-2`}
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </Row>
      <CarCards cars={carsInfo.sortedCars} />
    </Container>
  )
}
export default Cars
