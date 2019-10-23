import React from 'react'

const FC = props => {
  return (
    <div>
      Contact
      <form>
        <ul>
          <li>
            <input type="text"/>
          </li>
          <li>
            <input type="text"/>
          </li>
          <li>
            <input type="text"/>
          </li>
          <li>
            <input type="text"/>
          </li>
        </ul>
      </form>
    </div>
  )
}

export { FC as ContactView }
