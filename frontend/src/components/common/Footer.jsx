import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6">
      <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Simple Note App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
