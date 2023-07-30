import { useState } from 'react';

function App() {

  const [form, setForm] = useState({});

  const handleForm = (e) => {
    console.log([e.target.value, e.target.name]);

    setForm({...form,[e.target.name]:e.target.value})

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/home",{
      method:'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': "application/json"
      }
    })
    const data = await response.text();
    console.log(data);

    
  }
  return (
    <div className="App">

      

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">ADRAK TOKEN COMMUNITY</h1>
            <p className="leading-relaxed mt-4">SIGN UP to stay up to date with Adrak Token News and updates</p>
            {/* Add the form element */}
            <form onSubmit={handleSubmit}>
              <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">EMAIL</label>
                  <input type="text" name="email" onChange={handleForm} id="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                  <label htmlFor="pass" className="leading-7 text-sm text-gray-600">PASSWORD</label>
                  <input type="password" onChange={handleForm} id="email" name="pass" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                <p className="text-xs text-gray-500 mt-3">We await you a smooth onboarding to our lovely community!</p>
              </div>
            </form>
          </div>
        </div>
</section>

      



    </div>
  );
}

export default App;
