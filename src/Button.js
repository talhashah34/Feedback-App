const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} style={{margin: '0 5px'}}>
        {text}
    </button>
  )
}

export default Button
