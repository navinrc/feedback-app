function FeedbackStats({feedback}) {
    return (
        <div className="feedback-stats">
            <h4>{feedback.length} {feedback.length>1 ? 'Reviews' : 'Review'}</h4>
            <h4>Average Rating: 10</h4>
        </div>
    )
}

export default FeedbackStats