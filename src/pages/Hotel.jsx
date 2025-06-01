import PageWrapper from "../components/PageWrapper";

export default function Hotel() {
  return (
    <PageWrapper>
      <div className="home-container">
        <h2 className="pub-crawl-title">Hotel Finder</h2>
        <p className="home-subtext">Find the perfect place to stay near the city's best spots.</p>

        <div className="home-grid">
          <div className="home-card">
            <h2>🏨 City Center Hotels</h2>
            <p>Stay close to all the action with well-rated hotels in the heart of the city.</p>
          </div>

          <div className="home-card">
            <h2>🛌 Budget B&Bs</h2>
            <p>Affordable and charming bed & breakfasts offering a warm welcome and breakfast included.</p>
          </div>

          <div className="home-card">
            <h2>🌃 Late-Night Friendly</h2>
            <p>Explore accommodations that allow late check-ins and easy access to nightlife.</p>
          </div>

          <div className="home-card">
            <h2>🌿 Peaceful Getaways</h2>
            <p>Need rest after pub crawling? Book hotels with quiet rooms and cozy vibes.</p>
          </div>
        </div>

        <div className="home-footer">
          <p>🔍 Hotel search and filters launching soon. Get ready to book your weekend stay!</p>
        </div>
      </div>
    </PageWrapper>
  );
}
