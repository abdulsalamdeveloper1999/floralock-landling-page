import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Set end time (24 hours from now, resets daily)
        const getEndTime = () => {
            const now = new Date();
            const end = new Date();
            end.setHours(23, 59, 59, 999); // End of today
            return end;
        };

        const calculateTimeLeft = () => {
            const now = new Date();
            const end = getEndTime();
            const difference = end - now;

            if (difference > 0) {
                setTimeLeft({
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                // Reset for next day
                setTimeLeft({ hours: 23, minutes: 59, seconds: 59 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num) => String(num).padStart(2, '0');

    return (
        <div className="countdown-banner">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-center gap-4 flex-wrap">
                    <span className="countdown-icon">🔥</span>
                    <span className="countdown-text font-bold">Limited Time Offer!</span>
                    <span className="countdown-label">Ends in:</span>

                    <div className="countdown-timer">
                        <div className="countdown-unit">
                            <span className="countdown-value">{formatNumber(timeLeft.hours)}</span>
                            <span className="countdown-label-small">Hours</span>
                        </div>
                        <span className="countdown-separator">:</span>
                        <div className="countdown-unit">
                            <span className="countdown-value">{formatNumber(timeLeft.minutes)}</span>
                            <span className="countdown-label-small">Mins</span>
                        </div>
                        <span className="countdown-separator">:</span>
                        <div className="countdown-unit">
                            <span className="countdown-value">{formatNumber(timeLeft.seconds)}</span>
                            <span className="countdown-label-small">Secs</span>
                        </div>
                    </div>

                    <span className="countdown-offer">Get 10% OFF Today!</span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
