import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  renderReview = currentReviewDetails => {
    const {imgUrl, username, companyName, description} = currentReviewDetails
    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} className="profile-photo" />
        <p className="name-txt">{username}</p>
        <p className="company-name-txt">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[activeReviewIndex]

    return (
      <div className="bg-container">
        <h1 className="reviews-heading">Reviews</h1>
        <div className="carousel">
          <button
            type="button"
            className="arrow-btn"
            testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-img"
            />
          </button>
          {this.renderReview(currentReviewDetails)}
          <button
            type="button"
            className="arrow-btn"
            testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-img"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
