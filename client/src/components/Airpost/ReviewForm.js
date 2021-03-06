import React, {Fragment} from 'react';
import styled from 'styled-components';

const ReviewForm = (props) => {
const ratingOptions = [5,4,3,2,1].map((score, index)=>{
    return (
    <Fragment>
        <input type="radio" value={score} name="rating" onChange={()=>console.log('selected:', score)} id={`rating-${score}`}/>
        <label></label>
    </Fragment>
    )
})

    return (
        <div className="wrapper">
            <form onSubmit={props.handleSubmit}>
                <div>Is this topic {props.attributes.name} bullish or bearish?</div>
                <div className="field">
                    <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title"/>
                </div>
                <div className="field">
                    <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review Description"/>
                </div>
                <div className="field">
                    <div className="rating-container">
                        <div className="rating-title-text">Rate this Post</div>
                        {ratingOptions}
                    </div>
                </div>
                <button type="submit">Submit Your Review</button>
            </form>
        </div>
    )
}

export default ReviewForm