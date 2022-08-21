import "./Info.scss";

export default function Info({ tab, data }) {
  return (
    <div className="info">
      <h1 className="info__heading">{data.name}</h1>
      <p className="info__content">{data[tab]?.content}</p>

      <p className="info__source">
        Source:{" "}
        <a href={data[tab]?.source} target="_blank" className="info__link">
          Wikipedia
          <img src="assets/icon-source.svg" alt="" />
        </a>
      </p>
    </div>
  );
}
