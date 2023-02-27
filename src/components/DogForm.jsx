import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DogForm = ({
  heading,
  dogName = '',
  dogBreed = '',
  dogAge = 0,
  isUpdating = false,
  dogId,
}) => {
  const navigate = useNavigate()

  const [name, setName] = useState(dogName)
  const [breed, setBreed] = useState(dogBreed)
  const [age, setAge] = useState(dogAge)

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await fetch(
        `http://localhost:5005/api/dogs${isUpdating ? `/${dogId}` : ''}`,
        {
          method: isUpdating ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, breed, age }),
        }
      )
      if (response.status === 201) {
        const parsed = await response.json()
        navigate(`/dogs/${parsed._id}`)
      }
      if (response.status === 200) {
        navigate(`/dogs/${dogId}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (age < 0) {
      setAge(0)
    }
  }, [age])

  return (
    <>
      <h1>{heading}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Dog Name
          <input type='text' value={name} onChange={event => setName(event.target.value)} />
        </label>
        <label>
          Dog breed
          <input
            type='text'
            value={breed}
            onChange={event => setBreed(event.target.value)}
          />
        </label>
        <label>
          Age
          <input
            type='number'
            value={age}
            onChange={event => setAge(event.target.value)}
          />
        </label>
        <button type='submit'>{isUpdating ? 'Update' : 'Create'}</button>
      </form>
    </>
  )
}

export default DogForm