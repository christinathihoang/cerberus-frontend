import React, { useEffect, useState } from "react";
import "bulma/css/bulma.css";

function Header() {
  return (
    <div className="mb-5">
      <nav className="level">
        <div className="level-left"></div>

        <div className="level-right">
          <p className="level-item">
            <strong>Christina Hoang</strong>
          </p>
        </div>
      </nav>
    </div>
  );
}

export default Header;
