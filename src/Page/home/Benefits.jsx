import React from "react";
import "./benefits.css";

const Benefits = () => {
  return (
    <>
   
    <div className="container">
      <div className="flex-col">
        <div>
    <h1 >Benefits</h1>
            <div className="row">
                {/* <img src="assets/ico-battery-2.png" alt="Battery" /> */}
          <h5>Boost Your Vitality</h5>
          </div>

          <p>
            Rediscover the energetic you! Known for centuries, Shilajit, when
            traditionally combined with milk, is a powerful rejuvenator,
            restoring stamina and vitality.
          </p>
        </div>

        <div>
            <div className="row">
            {/* <img src="/assets/ico-head.png" alt="" /> */}
          <h5>Nature’s Multivitamin</h5>
          </div>
          <p>
            Rich in essential vitamins (A, B complex, C) and minerals, Shilajit
            contains unique components like dibenzo alpha pyrones, fulvic acid,
            and terpenoids, known for promoting health.
          </p>
        </div>

        <div>
            <div className="row">
                {/* <img src="/assets/ico-calender.png" alt="Calender" /> */}
          <h5>Enhance Natural Desires</h5>
          </div>

          <p>
            Celebrated as nature's premier enhancer, Shilajit revitalizes cells,
            bolsters heart health, and augments digestive and endurance power.
            Elevate both physical and emotional connections.
          </p>
        </div>
      </div>

      <div className="img-div">
        <img
          src="https://naturalshilajit.com/cdn/shop/t/10/assets/s1-min.webp?v=97390339308865307071693990510"
          alt="Shilajit Image"
        />
      </div>

      <div className="flex-col">
        <div>
            <div className="row">
                {/* <img src="/assets/ico-magic-wand-2.png" alt="Detox Naturally" /> */}
          <h5>Detox Naturally</h5>
          </div>
          <p>
            Combat urban pollutants. Fulvic acid in Shilajit works diligently to
            detoxify and neutralize harmful compounds, ensuring a purified
            system, free from toxic heavy metals.
          </p>
        </div>

        <div>
            <div className="row">
                {/* <img src="/assets/ico-magic-wand-3.png" alt="" /> */}
          <h5>Stabilize Mood</h5>
          </div>
          <p>
            Embrace tranquility. Feel a noticeable uplift in your mood within
            just a week, as Shilajit harmonizes emotions and greatly diminishes
            feelings of unease.
          </p>
        </div>

        <div>
            <div className="row">
                {/* <img src="/assets/ico-quantity.png" alt="" /> */}
          <h5>Combat Aging</h5>
          </div>
          <p>
            As we age, cellular energy production diminishes. But Shilajit
            actively revitalizes coenzyme Q10 in the mitochondria, paving the
            way for enhanced energy and a more youthful you.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Benefits;