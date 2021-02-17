import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ stars, review, color }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        <i
          style={{ color }}
          className={
            stars >= index + 1
              ? 'fas fa-star'
              : stars >= number
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
    )
  })
  return (
    <div className='rating'>
      {tempStars}
      <h6>{review} </h6>
    </div>
  )
  // return (
  //   <div>
  //     <span>
  //       <i
  //         className={
  //           stars >= 1
  //             ? 'fas fa-star'
  //             : value >= 0.5
  //             ? 'fas fa-star-half-alt'
  //             : 'far fa-star'
  //         }
  //       ></i>
  //     </span>
  //     <span>
  //       <i
  //         className={
  //           stars >= 2
  //             ? 'fas fa-star'
  //             : value >= 1.5
  //             ? 'fas fa-star-half-alt'
  //             : 'far fa-star'
  //         }
  //       ></i>
  //     </span>
  //     <span>
  //       <i
  //         className={
  //           stars >= 3
  //             ? 'fas fa-star'
  //             : value >= 2.5
  //             ? 'fas fa-star-half-alt'
  //             : 'far fa-star'
  //         }
  //       ></i>
  //     </span>
  //     <span>
  //       <i
  //         className={
  //           stars >= 4
  //             ? 'fas fa-star'
  //             : value >= 3.5
  //             ? 'fas fa-star-half-alt'
  //             : 'far fa-star'
  //         }
  //       ></i>
  //     </span>
  //     <span>
  //       <i
  //         className={
  //           stars >= 5
  //             ? 'fas fa-star'
  //             : value >= 4.5
  //             ? 'fas fa-star-half-alt'
  //             : 'far fa-star'
  //         }
  //       ></i>
  //     </span>
  // <span>{text && text}</span>

  //   </div>
  // )
}

Rating.defaultProps = {
  color: '#E7E247',
}
// Rating.propTypes = {
//   stars: PropTypes.number.isRequired,
//   review: PropTypes.string.isRequired,
//   color: PropTypes.string,
// }
export default Rating
