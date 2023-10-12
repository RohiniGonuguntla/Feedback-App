// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    selectedEmojiId: null,
  }

  handleEmojiClick = emojiId => {
    this.setState({selectedEmojiId: emojiId})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {selectedEmojiId} = this.state

    return (
      <div className="app-container">
        {selectedEmojiId !== null ? (
          <div className="container">
            <div className="emoji-container">
              <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
              <h1 className="thank-you-text">Thank You!</h1>
              <p className="paragraph">
                We wiil use your feedback to improve our customer support
                <br />
                performance
              </p>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="feedback-container">
              <h1 className="heading">
                How satisfied are you with our
                <br /> customer support performance?
              </h1>
              <div className="emojis-container">
                {emojis.map(emoji => (
                  <li key={emoji.id}>
                    <img
                      src={emoji.imageUrl}
                      alt={emoji.name}
                      className="emoji-img"
                      onClick={() => this.handleEmojiClick(emoji.id)}
                    />
                    <p className="name">{emoji.name}</p>
                  </li>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
