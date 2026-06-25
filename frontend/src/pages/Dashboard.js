import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px"
      }}
    >
      <h1>
        SaaS Dashboard
      </h1>

      <h3>
        Active Users: 15
      </h3>

      <h3>
        Active Subscriptions: 8
      </h3>

      <h3>
        Revenue: ₹25,000
      </h3>

      <br />

      <Link to="/subscriptions">
        Subscription Plans
      </Link>

      <br /><br />

      <Link to="/profile">
        Profile
      </Link>
    </div>
  );
}

export default Dashboard;