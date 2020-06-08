import React from "react"

const Current = ({ weather }) => {
    return (
        <div className="card">
            <div className="card__icon">
                <img
                    className="card__image"
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                />
                <div className="card__description">{weather.weather[0].description}</div>
            </div>
            <div className="card__main">
                <div className="card__main--info">
                    <p className="card__city">{weather.name}</p>
                    <p className="card__country">{weather.sys.country}</p>
                </div>
                <div className="card__temperature">{Math.floor(weather.main.temp)}ºC</div>
            </div>
            <div className="card__info">
                <div className="card__humidity">{weather.main.humidity}% of Humidity</div>
                <div className="card__wind">Wind {weather.wind.speed} m/s</div>
            </div>
        </div>
    )
}

export default Current
