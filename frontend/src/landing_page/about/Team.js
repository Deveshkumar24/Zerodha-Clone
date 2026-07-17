import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top ">
        <h1 className=" text-center ">People</h1>
      </div>

      <div className="row  fs-6">
        <div className="col-6  d-flex flex-column justify-content-center align-items-center text-center">
          <img
            src="/Media/Images/Devesh-Kumar.jpeg"
            alt="Devesh Kumar"
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          <h5 className="mt-3 text-muted">Devesh Kumar</h5>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Devesh Kumar is a B.Tech 4th year student who has already stepped
            into the world of development. With a strong passion for building
            things from scratch, he has been actively working as a DevOps
            Developer while still pursuing his degree.
          </p>
          <p>
            He specializes in DevOps practices including CI/CD pipelines,
            containerization, and cloud infrastructure. He loves bridging the
            gap between development and operations to build robust and scalable
            applications.
          </p>
          <p>Building new businesses is his zen.</p>
          <p>
            Connect on{" "}
            <a
              href="https://www.linkedin.com/in/deveshkumar24/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              LinkedIn
            </a>
            {" / "}
            <a
              href="https://www.instagram.com/devesh_2924?igsh=MTcxOWZqaGRwa2QxMw=="
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              Instagram
            </a>
            {" / "}
            <a
              href="https://github.com/Deveshkumar24"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
