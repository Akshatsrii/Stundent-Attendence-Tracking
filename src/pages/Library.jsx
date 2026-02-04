import React from "react";

const Library = () => {
  return (
    <main className="library-page">

      {/* Header */}
      <section className="library-header">
        <h1>University Library</h1>
        <p>
          Access thousands of books, journals, research papers and digital learning material.
        </p>
      </section>

      {/* Search Bar */}
      <section className="library-search-section">
        <input
          type="text"
          placeholder="Search books, authors, subjects..."
          className="library-search-input"
        />
        <button className="btn primary-btn">Search</button>
      </section>

      {/* Books Grid */}
      <section className="books-section">
        <h2>Available Books</h2>

        <div className="books-grid">

          <div className="book-card">
            <img src="/pages/book1.jpg" alt="Book 1" />
            <h3>Data Structures & Algorithms</h3>
            <p>Author: Mark Lewis</p>
            <span>Available</span>
          </div>

          <div className="book-card">
            <img src="/pages/book2.jpg" alt="Book 2" />
            <h3>Operating Systems Concepts</h3>
            <p>Author: Silberschatz</p>
            <span>Available</span>
          </div>

          <div className="book-card">
            <img src="/pages/book3.jpg" alt="Book 3" />
            <h3>Database Management Systems</h3>
            <p>Author: Navathe</p>
            <span>Unavailable</span>
          </div>

          <div className="book-card">
            <img src="/pages/book4.jpg" alt="Book 4" />
            <h3>Python Crash Course</h3>
            <p>Author: Eric Matthes</p>
            <span>Available</span>
          </div>

        </div>
      </section>

      {/* Library Rules */}
      <section className="library-rules-section">
        <h2>Library Rules</h2>

        <ul className="library-rules">
          <li>Maintain silence inside the library.</li>
          <li>Keep your mobile phones on silent mode.</li>
          <li>Return issued books on time.</li>
          <li>Handle books and materials with care.</li>
        </ul>
      </section>

    </main>
  );
};

export default Library;
