import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import Eth from "../../assets/eth.svg";

const Card = ({ image, currentBid = 1.25, endTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [bid, setBid] = useState(currentBid);

  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(endTime) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [endTime]);

  useEffect(() => {
    const randomizeInterval =
      Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000;

    const randomizeBid = () => {
      const randomIncrement = (Math.random() * 0.05).toFixed(3);
      setBid((prevBid) =>
        parseFloat((prevBid + parseFloat(randomIncrement)).toFixed(3))
      );
    };

    const bidInterval = setInterval(randomizeBid, randomizeInterval);

    return () => clearInterval(bidInterval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [calculateTimeLeft]);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
  }, [calculateTimeLeft]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="card">
      <div className="card__image">
        <div className="card__timer">
          <div className="card__timer-display">
            <span>{formatTime(timeLeft.hours)}h</span>
            <span>{formatTime(timeLeft.minutes)}m</span>
            <span>{formatTime(timeLeft.seconds)}s</span>
          </div>
        </div>
        <img src={image} alt="Sun-Glass" />
      </div>
      <div className="card__content">
        <h3 className="card__title">Sun-Glass</h3>
        <div className="card__details">
          <div className="card__bid">
            <span className="card__label">Current Bid</span>
            <div className="card__bid-amount">
            <img src={Eth} alt="ETH" />
              <span>{bid}</span>
            </div>
          </div>
        <button className="card__btn btn-primary card-btn">Place bid</button>

        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  currentBid: PropTypes.number,
  endTime: PropTypes.string.isRequired,
};

export default Card;
