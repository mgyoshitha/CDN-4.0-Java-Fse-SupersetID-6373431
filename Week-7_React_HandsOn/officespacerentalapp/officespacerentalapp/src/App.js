import React from 'react';

function App() {
  const headingText = "Office Space"; //
  const fullHeading = `${headingText} , at Affordable Range`;

  const imageUrl = process.env.PUBLIC_URL + '/office-space.jpg'; 

  const imageElement = ( //
    <img
      src={imageUrl}
      alt="Office Space"
      style={{ width: '40%', height: 'auto', display: 'block', margin: '20px auto' }} 
    />
  );

  
  const office1 = { //
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

   
  const officeSpaces = [ //
    { Name: "Tech Hub", Rent: 75000, Address: "Bengaluru" },
    { Name: "Co-Work Space", Rent: 45000, Address: "Hyderabad" },
    { Name: "Innovation Center", Rent: 62000, Address: "Pune" }
  ];

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{fullHeading}</h1> {/* Displaying the heading  */}
      {imageElement} {/* Displaying the image  */}

      {/* Displaying details for the first office object  */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '10px' }}>Name: {office1.Name}</h2>
        <h3 style={{ color: office1.Rent <= 60000 ? 'red' : 'green' }}> {/* Conditional inline CSS */}
          Rent: Rs. {office1.Rent}
        </h3>
        <h3>Address: {office1.Address}</h3>
      </div>

      {/* Looping through the list of office objects  */}
      <h1 style={{ marginTop: '50px' }}>More Office Spaces</h1>
      {officeSpaces.map((office, index) => ( //
        <div key={index} style={{ marginBottom: '30px', border: '1px solid #eee', padding: '15px', borderRadius: '8px', maxWidth: '500px', margin: '20px auto' }}>
          <h2>Name: {office.Name}</h2>
          <h3 style={{ color: office.Rent <= 60000 ? 'red' : 'green' }}> {/* Conditional inline CSS  */}
            Rent: Rs. {office.Rent}
          </h3>
          <h3>Address: {office.Address}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;