import PropTypes from "prop-types";
import React from "react";

import Highlight from "../components/highlight";

const Section = ({ container, title, shadow, children, ...props }) => (
  <section className="section" {...props}>
    <div className="container content">
      {shadow ? (
        <Highlight as="h2" className="title is-2" color={shadow}>
          {title}
        </Highlight>
      ) : (
        <h2 className="title is-h2">{title}</h2>
      )}
    </div>
    <div className={container ? "container content" : "content"}>
      {children}
    </div>
  </section>
);

Section.propTypes = {
  container: PropTypes.bool,
  shadow: PropTypes.string,
  title: PropTypes.string
};

Section.defaultProps = {
  container: false,
  shadow: ""
};

export default Section;
