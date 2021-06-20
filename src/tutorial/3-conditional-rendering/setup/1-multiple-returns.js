import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users/irahrosete'

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status < 299) {
          return response.json()
        } else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(response.statusText)
        }
      })
      .then((data) => {
        setIsLoading(false)
        const { login } = data
        setUser(login)
      })
      // this does not catch 404 errors
      .catch((error) => console.log(error))
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>Error...</h2>
  }
  return <h2>{user}</h2>
}

export default MultipleReturns
