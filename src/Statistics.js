const Statistics = ({good, bad, neutral}) => {
    const total = good + bad + neutral;
    if(total === 0){
        return <p>No feedback given yet.</p>
    }
  return (
    <div style={{marginTop: '30px'}}>
        <h2>Statistics</h2>
        {/*Show Good count*/}
        <p>Good: {good}</p>
        <p>Bad: {bad}</p>
        <p>Neutral: {neutral}</p>
        <p>Total: {total}</p>
    </div>
  )
}

export default Statistics
