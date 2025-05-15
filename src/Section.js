const Section = ({title, children}) => {
  return (
    <div style={{margin: '20px 0'}}>
        <h2>{title}</h2>
        {children}
    </div>
  )
}

export default Section
