import PageWrapper from "../components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="home-container">
        <h1 className="pub-crawl-title">Welcome to Weekend City Break!</h1>
        <p className="home-subtext">
          Discover pubs, plan activities, and find great places to stay in the city.
        </p>

        <div className="home-grid">
          <div className="home-card">
            <h2>🍻 Pub Crawl</h2>
            <p>Explore and rate top pubs in the city. Start your perfect crawl night with local favorites.</p>
          </div>

          <div className="home-card">
            <h2>🎯 Activities</h2>
            <p>View or book exciting group activities like escape rooms, walking tours, or pub games.</p>
          </div>

          <div className="home-card">
            <h2>🛏️ Hotel Finder</h2>
            <p>Browse recommended hotels and B&Bs close to the nightlife, all rated by past city breakers.</p>
          </div>
        </div>

        <div className="home-footer">
          <p>🗓️ Start building your weekend itinerary by selecting a tab from the sidebar!</p>
        </div>
      </div>
    </PageWrapper>
  );
}
