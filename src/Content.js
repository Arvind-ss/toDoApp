import "./Content.css";
import ItemsList from "./ItemsList";
const Content = ({ items, handelCheck, handelDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemsList
          items={items}
          handelCheck={handelCheck}
          handelDelete={handelDelete}
        />
      ) : (
        <p style={{ marginTop: "15rem" }}>Your List is Empty</p>
      )}
    </main>
  );
};
export default Content;
 