import { Link, useLocation } from "react-router-dom"

const Navigation = () => {
    const path = useLocation()
    const countryCode = path.pathname.split('/')[1]



    return <nav>
        <Link to={`/${countryCode}`}>Currency exchange</Link>
        <Link to={`${countryCode}/airports`}>Airports</Link>
    </nav>
}

export default Navigation