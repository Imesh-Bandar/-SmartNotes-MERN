import React from "react";

const FooterComponent = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer footer-center p-4 bg-base-200 text-base-content">
        <div>
          <p className="text-sm">
            &copy; {year} - Smart Notes. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
