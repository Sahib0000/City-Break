import "../styles/styles.css";

const PageWrapper = ({ children, noBox = false }) => {
  return (
    <div className="main-content-column">
      {noBox ? children : <div className="page-box">{children}</div>}
    </div>
  );
};

export default PageWrapper;
