'use client'
import { useState } from 'react';

const Rating = () => {
  // State to store ratings
  const [ratings, setRatings] = useState({
    presentation: 10,
    contact: 10,
    rapportQualitePrix: 10,
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [comment, setComment] = useState("")
  // Function to update ratings
  const handleRatingChange = (category, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [category]: value,
    }));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value)
  }
  // Calculate the average rating
  const calculateAverage = () => {
    const { presentation, contact, rapportQualitePrix } = ratings;
    const total = ((presentation + contact + rapportQualitePrix) / 3)/2;
    // Round to the nearest 0.5
    return Math.round(total * 2) / 2;
  };

  const handleButtonClick = () => {
    setIsButtonDisabled(true);

    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 2000);
  }

  return (
    <center>
      <div className="card w-1/4 bg-base-100 items-center text-black shadow-xl">
        <div className="card-body items-center flex flex-col text-center">
          <h2 className="card-title text-2xl mt-2">Notez sa présentation</h2>
          <br />
        <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        
        <h2 className="card-title">Hedi Fourati</h2>
          {/* Presentation Rating */}
          <p >Qualité de la présentation ?</p>
          <div className="rating rating-lg rating-half">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
              <input
                key={star}
                type="radio"
                name="presentation-rating"
                className={`bg-orange-400 mask mask-star-2 mask-half-${star % 2 === 0 ? 2 : 1}`}
                onChange={() => handleRatingChange('presentation', star)}
                checked={ratings.presentation === star}
              />
            ))}
          </div>
          {/* Contact Rating */}
          <p>Qualité du contact avec la personne ?</p>
          <div className="rating rating-lg rating-half">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
              <input
                key={star}
                type="radio"
                name="contact-rating"
                className={`bg-orange-400 mask mask-star-2 mask-half-${star % 2 === 0 ? 2 : 1}`}
                onChange={() => handleRatingChange('contact', star)}
                checked={ratings.contact === star}
              />
            ))}
          </div>
          {/* Rapport Qualite Prix Rating */}
          <p>Rapport qualité prix ?</p>
          <div className="rating rating-lg rating-half">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
              <input
                key={star}
                type="radio"
                name="rapportQualitePrix-rating"
                className={`bg-orange-400 mask mask-star-2 mask-half-${star % 2 === 0 ? 2 : 1}`}
                onChange={() => handleRatingChange('rapportQualitePrix', star)}
                checked={ratings.rapportQualitePrix === star}
              />
            ))}
          </div>
          {/* Total Rating */}
          <p className='text-orange-400'>Total</p>
          <div className="rating rating-lg rating-half">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
              <input
                key={star}
                type="radio"
                name="total-rating"
                className={`bg-orange-400 mask mask-star-2 mask-half-${star % 2 === 0 ? 2 : 1}`}
                disabled
                checked={calculateAverage() * 2 === star}
              />
            ))}
          </div>
          <p>Commentez la prestation</p>
          <textarea
            className="textarea textarea-primary"
            required
            placeholder="J'ai trouve que..."
            onChange={handleCommentChange}
            value={comment}
          ></textarea>
          <br />
          <button className="btn btn-primary" onClick={handleButtonClick} disabled={isButtonDisabled}>
              SUBMIT
          </button>
        </div>
      </div>
    </center>
  );
};

export default Rating;
