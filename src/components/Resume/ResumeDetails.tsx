import React from "react";

type ResumeDetailsPropsType = {
  title: string;
  date?: any;
  content: any;
  company?: string;
};

const ResumeDetails = (props: ResumeDetailsPropsType) => {
  return (
    <div className="resume-item">
      <h5 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h5>
      <h5>
        <em>{props.company}</em>
      </h5>
      <em>{props.date}</em>
      <ul>
        {props.content.map((value: any, index: any) => (
          <li className="li-rem" key={index}>
            • {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeDetails;
