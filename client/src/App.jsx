import React, { useState } from "react"
import "./sass/main.scss"
import axios from "axios"
import Form from "./components/Form"
import Current from "./components/Current"
import Empty from "./components/Empty"

const App = () => {
    const [currentWeather, setCurrentWeather] = useState()
    const [search, setSearch] = useState()
    const [current, setCurrent] = useState(false)

    //SEARCH CITY
    const onSubmit = e => {
        e.preventDefault()

        axios
            .get("/city", { params: { search } })
            .then(res => {
                setCurrentWeather(res.data)
                setCurrent(true)
            })
            .catch(() => setCurrent(false))
    }

    return (
        <>
            <main className="container">
                <h2 className="titulo">Search Weather for your Location</h2>
                <Form onSubmit={onSubmit} value={search} onChange={e => setSearch(e.target.value)} />
                {current && search !== "" ? <Current weather={currentWeather} /> : <Empty />}
            </main>
            <footer>
                <span>API:</span>
                <img src={require("./images/openweather_api.png")} alt="WeatherStack API" />
            </footer>
        </>
    )
}

export default App
