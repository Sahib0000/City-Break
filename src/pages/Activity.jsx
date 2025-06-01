import PageWrapper from "../components/PageWrapper";

export default function Activity() {
  return (
    <PageWrapper>
      <div className="home-container">
        <h2 className="pub-crawl-title">Things to Do</h2>
        <p className="home-subtext">Explore local activities to enhance your weekend adventure.</p>

        <div className="home-grid">
          <div className="home-card">
            <h2>🚶‍♂️ Walking Tours</h2>
            <p>Join guided walks through historic neighborhoods, street art trails, and hidden alleys.</p>
          </div>

          <div className="home-card">
            <h2>🎭 Escape Rooms</h2>
            <p>Challenge your group with immersive escape room puzzles and scenarios across the city.</p>
          </div>

          <div className="home-card">
            <h2>🍽️ Food Experiences</h2>
            <p>Book food tastings, street food tours, or cocktail-making classes with local pros.</p>
          </div>

          <div className="home-card">
            <h2>🕹️ Pub Games</h2>
            <p>Compete in darts, shuffleboard, and other pub-based games in unique local venues.</p>
          </div>
        </div>

        <div className="home-footer">
          <p>🔜 More activities and bookings coming soon. Stay tuned!</p>
        </div>
      </div>
    </PageWrapper>
  );
}
