import './index.css'

const Welcome = props => {
  const {name, greeting} = props
  return (
    <h1 className="message">
      {greeting}, {name}
    </h1>
  )
}

// Default props is similar to default arguments passed in functions.
// If props are not passes in the components then these will be used.
Welcome.defaultProps = {
  name: 'Mayukh',
  greeting: 'Hello',
}

export default Welcome
