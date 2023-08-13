import { useState } from "react";
import { FeedbackOptions }  from "./FeedbackOptions/FeedbackOptions";
import { Section } from './Section/Section';
import { Statistics } from "./Statistics/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onFeedbackLeave = (type) => {
  if (type === 'good') {
    setGood((prev) => prev + 1);
  } else if (type === 'neutral') {
    setNeutral((prev) => prev + 1);
  } else if (type === 'bad') {
    setBad((prev) => prev + 1);
  }
};
   const countTotalFeedback = () => {
    
    return good + neutral + bad;;
  };
  
  const countPositiveFeedbackPercentage = () => {

    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };
  const totalFeedback = countTotalFeedback();

  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onFeedbackLeave={onFeedbackLeave} />
      </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
             message="There is no feedback"
          />
        </Section>
    </div>
  );
};

export default App;