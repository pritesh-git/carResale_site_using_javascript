import carsData from '../assets/data'
const formatData = async items => {
  const itemList = await items.map(item => {
    const id = item.sys.id
    const image = item.fields.images.map(image => image.fields.file.url)
    return { ...item.fields, image, id }
  })
  return itemList
}

export const getData = async () => {
  const cars = await formatData(carsData)
  const featuredCars = cars.filter(car => car.featured === true)
  const maxPrice = Math.max(...cars.map(car => car.price))
  const maxSize = Math.max(...cars.map(car => car.size))
  const data = {
    cars,
    featuredCars,
    price: maxPrice,
    maxPrice,
    maxSize,
    type: 'all',
    carMake: 'all',
    minPrice: 0,
    minSize: 0,
    gps: false,
    sportPackage: false,
  }
  return data
}
