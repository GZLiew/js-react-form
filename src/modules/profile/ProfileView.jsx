import React from 'react'

const FC = props => {
  console.log(props)
  const { params } = props.match

  return (
    <div>
      profile of {params.name}
    </div>
  )
}

export { FC as ProfileView }
