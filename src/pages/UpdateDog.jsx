import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DogForm from '../components/DogForm'

const UpdateDog = () => {
  const { dogId } = useParams()

  const [isLoading, setIsLoading] = useState(true)
  const [dog, setDog] = useState()

  const fetchDog = async () => {
    try {
      const response = await fetch(`http://localhost:5005/api/dogs/${dogId}`)
      const parsed = await response.json()
      setDog(parsed)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDog()
  }, [dogId])

  return isLoading ? (
    <h1>Loading ...</h1>
  ) : (
    <DogForm
      heading='Update recipe'
      dogName={dog.name}
      dogBreed={dog.breed}
      dogAge={dog.age}
      isUpdating
      dogId={dogId}
    />
  )
}

export default UpdateDog