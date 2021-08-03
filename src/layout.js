import React from "react";
import { Helmet } from "react-helmet";

import "./css/typography.css";
import "./css/styles.css";

export default function Template({ children }) {
  return (
    <main>
      <Helmet
        title="The Halsey Wedding | Sunday, October 17, 2021"
        meta={[{ name: "description", content: "Sample" }]}
      />
      <div>{children}</div>
    </main>
  );
}
