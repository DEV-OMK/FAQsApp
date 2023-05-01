// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isHidden: true,
  }

  toggleAnswer = () => {
    this.setState(prevState => ({
      isHidden: !prevState.isHidden,
    }))
  }

  render() {
    const {isHidden} = this.state
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const url = isHidden
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    const altText = isHidden ? 'plus' : 'minus'

    return (
      <li className="faq-item-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="button" onClick={this.toggleAnswer}>
            <img src={url} alt={altText} />
          </button>
        </div>
        {!isHidden && <hr />}
        {!isHidden && <p className="answer">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
