// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  previousReview = () => {
    const {index} = this.state
    if (index === 0) {
      this.setState(prevState => ({index: prevState.index}))
    } else {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  nextReview = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index === reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index}))
    } else {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container">
          <button
            testId="leftArrow"
            type="button"
            onClick={this.previousReview}
            className="arrow-btn"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-icon"
            />
          </button>
          <div className="profile-container">
            <img src={imgUrl} alt={username} />
            <p className="name">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>

          <button
            testId="rightArrow"
            type="button"
            onClick={this.nextReview}
            className="arrow-btn"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-icon"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
