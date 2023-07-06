import { ActiveIndexType } from "../../types/ActiveIndex.type";
import { DataType } from "../../types/Data.type";
import "./pagination.scss";
import { useEffect } from "react";
type PaginationType = {
  data: DataType;
  activeIndex: ActiveIndexType;
  setActiveIndex: React.Dispatch<React.SetStateAction<ActiveIndexType>>;
};
function Pagination({ data, activeIndex, setActiveIndex }: PaginationType) {
  useEffect(() => {

    const allEl = document.getElementsByClassName("element");
    for (let i = 0; i < allEl.length; i++) {
      const el = allEl[i];
      el.classList.add("disabled");
    }

    const currentEl = allEl[activeIndex.index];
    currentEl?.classList.remove("disabled");
    console.log(currentEl)
  }, [activeIndex]);

  return (
    <div className="pagination">
      {data.map((item, i) => (
        <div
        id={i.toString()}
          key={i}
          onClick={() =>
            setActiveIndex(({ index, iteration }) => {
              return {
                index: i,
                iteration: iteration + index - i,
              };
            })
          }
          className="element"
        />
      ))}
    </div>
  );
}

export default Pagination;
