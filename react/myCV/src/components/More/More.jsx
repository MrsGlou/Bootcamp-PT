import React from "react";

function More({ languages, habilities, volunteer }) {
  return (
    <div>
      <h3>Languages</h3>
      <div className="languages card">
        <p>{languages.language}</p>
        <p>📝{languages.wrlevel}</p>
        <p>💬{languages.splevel}</p>
      </div>
      <h3>Habilities</h3>
      <div className="habilities card">
        {habilities.map((item) => {
          return (
            <div key= {JSON.stringify(item)}>
            <p>🔧{item}</p>
            </div>
          )
        })}
      </div>
      <h3>Volunteer</h3>
      <div className="volunteer card">
      {volunteer.map((item) => {
          return (
            <div key= {JSON.stringify(item)}>
            <p>{item.name}</p>
            <p>{item.where}</p>
            <p>{item.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default More;
