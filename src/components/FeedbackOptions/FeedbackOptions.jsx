import styled from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';

 export const FeedbackOptions = ({options, onFeedbackLeave }) => {

    return (
      <>
        <ul className={styled.list}>
          {options.map((option, index) => {
            return (
              <li key={index}>
                <button className={styled.btn} type="button" onClick={() => onFeedbackLeave(option)} value={option}>
                  {option}
                </button>
              </li>);
          })}
        </ul>
      </>
    );
  
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onFeedbackLeave: PropTypes.func.isRequired,
};