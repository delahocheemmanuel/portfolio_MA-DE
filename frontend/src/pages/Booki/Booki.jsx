import React from 'react';



const bookiSite = () => {
    const iframeHeight = '2100px';
  return (
    <main>
    <section className='Booki'>
      <iframe
        src="https://delahocheemmanuel.github.io/site_projet_2/"
        title="Booki"
        width="100%"
        height={iframeHeight}
        style={{ border: 'none' }}
      />
    </section>
    </main>
  );
};

export default bookiSite;
