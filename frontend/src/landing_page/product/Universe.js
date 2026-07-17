import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">

        <div className="col-12 mb-3">
          <h2 style={{ fontWeight: "400", fontSize: "28px", color: "#444" }}>
            The Zerodha Universe
          </h2>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="col-4 p-3 mt-3">
          <img 
            src="Media/Images/zerodhaFundhouse.png" 
            alt="Zerodha Fund House" 
            style={{ width: "150px", height: "50px", objectFit: "contain" }}
          />
          <p className="text-muted mt-2" style={{ fontSize: "13px" }}>
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 p-3 mt-3">
          <img 
            src="Media/Images/sensibullLogo.svg" 
            alt="Sensibull" 
            style={{ width: "150px", height: "50px", objectFit: "contain" }}
          />
          <p className="text-muted mt-2" style={{ fontSize: "13px" }}>
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-4 p-3 mt-3">
          <img 
            src="Media/Images/goldenpiLogo.png" 
            alt="Goldenpi" 
            style={{ width: "150px", height: "50px", objectFit: "contain" }}
          />
          <p className="text-muted mt-2" style={{ fontSize: "13px" }}>
            Investment research platform <br />
            that offers detailed insights on stocks,
            <br />
            sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 p-3 mt-3">
          <img 
            src="Media/Images/streakLogo.png" 
            alt="Streak" 
            style={{ width: "150px", height: "50px", objectFit: "contain" }}
          />
          <p className="text-muted mt-2" style={{ fontSize: "13px" }}>
            Systematic trading platform <br />
            that allows you to create and backtest <br />
            strategies without coding.
          </p>
        </div>

        <div className="col-4 p-3 mt-3">
          <img 
            src="Media/Images/smallcaselogo.png" 
            alt="Smallcase" 
            style={{ width: "150px", height: "50px", objectFit: "contain" }}
          />
          <p className="text-muted mt-2" style={{ fontSize: "13px" }}>
            Thematic investing platform
            <br />
            that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 p-3 mt-3">
          <img 
            src="Media/Images/dittoLogo.png" 
            alt="Ditto" 
            style={{ width: "150px", height: "50px", objectFit: "contain" }}
          />
          <p className="text-muted mt-2" style={{ fontSize: "13px" }}>
            Personalized advice on life <br />
            and health insurance. No spam <br />
            and no mis-selling.
          </p>
        </div>
       <Link to="/signup" className='p-2 fs-5 mb-5 btn btn-primary text-white text-decoration-none' style={{width:"20%", margin:"0 auto"}}>Sign up for free</Link>
      </div>

    </div>
  );
}

export default Universe;