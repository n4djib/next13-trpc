import Link from "next/link";
import React from "react";

const styles = {
  margin: "5px",
};

const Header = () => {
  return (
    <div>
      <Link href="/" style={styles}>
        Home
      </Link>
      <Link href="about" style={styles}>
        About
      </Link>
      <Link href="test-fetch" style={styles}>
        Tets Fetch
      </Link>
      <Link href="test-state" style={styles}>
        Tets State
      </Link>
    </div>
  );
};

export default Header;
