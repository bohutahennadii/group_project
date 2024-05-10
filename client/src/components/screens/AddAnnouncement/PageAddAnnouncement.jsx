import React from 'react'
// import Footer from '../home/footer/footer'


function PageAddAnnouncement() {
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <input type="text" />
        <input type="text" />
        <input type="tel" />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default PageAddAnnouncement