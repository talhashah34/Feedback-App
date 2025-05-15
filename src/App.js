import './App.css';
import {useState} from 'react'
import Button from './Button';
import Statistics from './Statistics';
import Section from './Section';

function App() {
  // useState: initial value is 0
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  return (
    <div className="App" style={{ width: '400px', margin: '50px auto', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Feedback App</h1>
      
      <Section title="Give Feedback">
        <Button text="👍 Good" onClick={() => setGood(good + 1)} />
        <Button text="👎 Bad" onClick={() => setBad(bad + 1)} />
        <Button text="😐 Neutral" onClick={() => setNeutral(neutral + 1)} />
      </Section>

      <Section title='Statistics'>
        <Statistics good={good} bad={bad} neutral={neutral} />
      </Section>
      
    </div>
  );
}

export default App;
