import "./subtitle.css";

export default function Subtitle({ title = "Title" }) {
  return (
    <div data-cy="subtitle" id="title-box">
      {title}
    </div>
  );
}
