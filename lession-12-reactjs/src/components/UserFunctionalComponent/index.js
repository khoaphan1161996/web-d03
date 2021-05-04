import './style.css'

function UserFunctionalComponent(props) {
  const {name,age,gender} = props

  return (
    <div className="functional-component">
      <p className="functional-component_name">Name: {name}</p>
      <p className="functional-component_age">Age: {age}</p>
      <p className="functional-component_gender">Gender: {gender}</p>
    </div>
  );
}

export default UserFunctionalComponent