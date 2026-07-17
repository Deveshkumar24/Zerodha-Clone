import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero" style={{ backgroundColor: "#387ed1", color: "#fff" }}>
      <div className="d-flex justify-content-between align-items-center px-5 py-4 border-bottom border-light border-opacity-10" style={{ margin: "0 4%" }}>
        <h4 className="fs-5 fw-medium mb-0">Support Portal</h4>
        <a href="" style={{ color: "#fff", textDecoration: "underline", fontSize: "0.95rem" }}>Track Tickets</a>
      </div>
      
      <div className="row px-5 py-5 m-3 align-items-start" style={{ margin: "0 4%" }}>
        <div className="col-lg-6 col-md-12 p-3">
          <h2 className="fs-3 fw-light mb-4" style={{ lineHeight: "1.4" }}>
            Search for an answer or browse help topics to create a ticket
          </h2>
          <div className="position-relative mb-3">
            <input 
              type="text" 
              className="form-control form-control-lg border-0"
              placeholder="Eg. how do I activate F&O" 
              style={{ 
                padding: "16px 20px", 
                borderRadius: "4px", 
                fontSize: "1rem", 
                color: "#424242",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)"
              }}
            />
          </div>
          <div className="d-flex flex-wrap gap-3 mt-3">
            <a href="" style={{ color: "#fff", textDecoration: "underline", fontSize: "0.9rem" }}>Track account opening</a>
            <a href="" style={{ color: "#fff", textDecoration: "underline", fontSize: "0.9rem" }}>Track segment activation</a>
            <a href="" style={{ color: "#fff", textDecoration: "underline", fontSize: "0.9rem" }}>Intraday margins</a>
            <a href="" style={{ color: "#fff", textDecoration: "underline", fontSize: "0.9rem" }}>Kite user manual</a>
          </div>
        </div>
        
        <div className="col-lg-6 col-md-12 p-3 ps-lg-5">
          <h2 className="fs-3 fw-light mb-4">Featured</h2>
          <ol className="ps-3" style={{ lineHeight: "2.2" }}>
            <li className="mb-2">
              <a href="" style={{ color: "#fff", textDecoration: "underline", fontSize: "0.95rem" }}>Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" style={{ color: "#fff", textDecoration: "underline", fontSize: "0.95rem" }}>Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;