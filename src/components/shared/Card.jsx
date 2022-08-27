import propTypes from 'prop-types'

function Card({children, reverse}) {
  return (
    <div className={reverse ? 'card reverse': 'card'}>{children}</div>
  )
}

Card.defaultProps = {
  reverse : false,
}

Card.propTypes = {
  children : propTypes.node.isRequired,
  reverse : propTypes.bool,
}

export default Card