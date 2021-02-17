import React from 'react'

const Rating = ({ stars, review }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        <i
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
    <div>
      <div className='stars'>{tempStars}</div>
      <p className='reviews'>({review} customer reviews)</p>
    </div>
  )
  // return (
  //   <div>
  //     <span>
  //       <i
  //         className={
  //           value >= 1
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
  //           value >= 2
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
  //           value >= 3
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
  //           value >= 4
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
  //           value >= 5
  //             ? 'fas fa-star'
  //             : value >= 4.5
  //             ? 'fas fa-star-half-alt'
  //             : 'far fa-star'
  //         }
  //       ></i>
  //     </span>
  //   </div>
  // )
}

export default Rating
