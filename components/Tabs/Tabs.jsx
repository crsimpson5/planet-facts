import "./Tabs.scss";
import cn from "classnames";

function Tab({ text, type, tab, setTab }) {
  return (
    <button
      className={cn("tab button", tab === type ? "active" : "")}
      onClick={() => setTab(type)}
      data-type={type}
    >
      <span className="text">{text}</span>
    </button>
  );
}

export default function Tabs({ tab, setTab, planet }) {
  return (
    <div
      className="tab-container"
      style={{
        "--color": `var(--color-${planet})`
      }}
    >
      <div className="tab-container__inner">
        <Tab text="Overview" type="overview" tab={tab} setTab={setTab} />
        <Tab text="Structure" type="structure" tab={tab} setTab={setTab} />
        <Tab text="Surface" type="geology" tab={tab} setTab={setTab} />
      </div>
    </div>
  );
}
