import { useState, useEffect } from "react"
import "./index.css"

function App() {

  const [donors, setDonors] = useState([])
  const [bloodFilter, setBloodFilter] = useState("All")
  const [requested, setRequested] = useState({})
  const [loading, setLoading] = useState(true)

  const [searchCity, setSearchCity] = useState("")
  const [sortAvailable, setSortAvailable] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const bloodGroups = ["A+", "B+", "O+", "AB+", "O-", "A-", "B-"]

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {

        const donorList = data.map(user => ({
          id: user.id,
          name: user.name,
          city: user.address.city,
          blood: bloodGroups[Math.floor(Math.random()*bloodGroups.length)],
          available: Math.random() > 0.3
        }))

        setDonors(donorList)
        setLoading(false)

      })
  }, [])

  const handleRequest = (id) => {
    setRequested({
      ...requested,
      [id]: true
    })
  }

  let filteredDonors = donors
    .filter(d =>
      bloodFilter === "All" ? true : d.blood === bloodFilter
    )
    .filter(d =>
      d.city.toLowerCase().includes(searchCity.toLowerCase())
    )

  if (sortAvailable) {
    filteredDonors = [...filteredDonors].sort((a, b) => {
      if (a.available === b.available) return 0
      return a.available ? -1 : 1
    })
  }

  const availableCount =
    filteredDonors.filter(d => d.available).length

  if (loading) {
    return <h2 className="loading">Loading donors...</h2>
  }

  return (

    <div className={darkMode ? "app dark" : "app"}>

      <div className="container">

        <button
          className="mode-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <h1 className="title">🩸 Community Blood Donor Finder</h1>

        <p className="count">
          Available Donors: <b>{availableCount}</b>
        </p>

        <div className="top-bar">

          <input
            className="search"
            type="text"
            placeholder="Search by city..."
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />

          <select
            className="dropdown"
            onChange={(e) => setBloodFilter(e.target.value)}
          >
            <option>All</option>
            {bloodGroups.map(group => (
              <option key={group}>{group}</option>
            ))}
          </select>

          <button
            className="sort-btn"
            onClick={() => setSortAvailable(!sortAvailable)}
          >
            {sortAvailable ? "Clear Sort" : "Sort by Availability"}
          </button>

        </div>

        <div className="donor-grid">

          {filteredDonors.length === 0 && (
            <p>No donors found</p>
          )}

          {filteredDonors.map(donor => (

            <div className="card" key={donor.id}>

              <h3>{donor.name}</h3>

              <p>
                <b>Blood Group:</b>
                <span className="badge">{donor.blood}</span>
              </p>

              <p><b>City:</b> {donor.city}</p>

              <p className={donor.available ? "available" : "not-available"}>
                {donor.available ? "Available" : "Not Available"}
              </p>

              <button
                className="btn"
                disabled={!donor.available || requested[donor.id]}
                onClick={() => handleRequest(donor.id)}
              >
                {requested[donor.id]
                  ? "Request Sent ✅"
                  : "Request Help"}
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>

  )
}

export default App