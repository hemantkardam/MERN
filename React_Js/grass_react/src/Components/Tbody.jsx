import React from 'react'

const Tbody = (props) => {
    let {id,firstName,lastName,email,birthDate,image}=props.mainV
  return (

    <tbody>
    <tr>
      <th>{id}</th>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{birthDate}</td>
      <td><img src={image} alt='/'/></td>
    </tr>
  </tbody>
  )
}

export default Tbody
