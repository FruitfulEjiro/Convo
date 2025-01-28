import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Speakers from "./components/Speakers";
import Events from "./components/Events";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
   return (
      <>
         <body className="">
            <Navbar />
            <main>
               <Hero />
               <Info />
               <Speakers />
               <Events />
               <Newsletter />
               <Footer />
            </main>
         </body>
      </>
   );
}

export default App;
