import { skillSetImages } from "./SkillSetImage";

const SkillSet = () => {
  const coreLanguages = skillSetImages.languages.map((i: any, j: any) => (
    <div key={j} style={{ display: "inline" }}>
      <img className="about-me-custom-icon" alt={i} src={i} />
      &nbsp;&nbsp;&nbsp;
    </div>
  ));

  const backend = skillSetImages.backend.map((i, j) => (
    <div key={j} style={{ display: "inline-block" }}>
      <img className="about-me-custom-icon" alt={i} src={i} />
      &nbsp;&nbsp;&nbsp;
    </div>
  ));

  const frontend = skillSetImages.frontend.map((i, j) => (
    <div key={j} style={{ display: "inline" }}>
      <img className="about-me-custom-icon" alt={i} src={i} />
      &nbsp;&nbsp;&nbsp;
    </div>
  ));

  const platform = skillSetImages.platform.map((i, j) => (
    <div key={j} style={{ display: "inline" }}>
      <img className="about-me-custom-icon" alt={i} src={i} />
      &nbsp;&nbsp;&nbsp;
    </div>
  ));

  return (
    <ul className="about-activity-ul">
      <li style={{ display: "inline" }} className="about-activity">
        <h3 className="about-activity">Core Languages: </h3>
        {coreLanguages}
        <br />
        <br />

        <h3 className="about-activity">Back-End: </h3>
        {backend}
        <br />
        <br />

        <h3 className="about-activity">Platforms:</h3>
        {platform}
        <br />
        <br />

        <h3 className="about-activity">Front-End: </h3>
        {frontend}
        <br />
        <br />
      </li>
    </ul>
  );
};

export default SkillSet;
