import React from "react";
import ManWorking2 from "../assets/man-working2.png";
import { Link } from "react-router-dom";

export const Advantage2 = () => {
  return (
    <section className="advantage">
      <div className="container advantage__container">
        <div className="advantage__info">
          <h2 className="title advantage__title">
            We complete every projects extra care as customer need
          </h2>
          <p className="desc advantage__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
            amet convallis nuncoe scelerisque in. orem ipsum dolor sit amet,
            consectetur adipisicing elit. Labore eius molestiae facere, natus
            reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit
            laborum iure inventore possimus laboriosam qui nam.
          </p>
          <Link to="/" className="btn advantage__btn">
            Read more
          </Link>
        </div>
        <img src={ManWorking2} alt="ManWorking" className="advantage__img" />
      </div>
    </section>
  );
};

export default Advantage2;
