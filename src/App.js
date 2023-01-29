import logo from "./logo.svg";
import "./App.css";
import Masonry from "react-masonry-css";
import items from "./data/imagesData";
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};
function App() {
  const getFeed = () => {
    let itemsOne = items.map(function (item) {
      return (
        <>
          <span style={{ color: "#ffffff" }}>{item.name}</span>
          <img src={item.imageUrl} alt={item.name} style={{ width: "100%" }} />
        </>
      );
    });

    return itemsOne;
  };
  return (
    <div className="App">
      {/* <div style={{ display: "flex", justifyContent: "end" }}>
        <select>
          <option value="Sorting">Sorting</option>
          <option value="Searching">Searching</option>
          <option value="Recursion">Recursion</option>
        </select>
      </div> */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {getFeed()}
      </Masonry>
    </div>
  );
}

export default App;
