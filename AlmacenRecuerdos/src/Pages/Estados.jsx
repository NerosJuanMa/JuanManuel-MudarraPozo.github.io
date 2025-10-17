

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BotonAlerta from "../Components/BotonAlerta";
import BotonColor from "../Components/BotonColor";
import FormularioSimple from "../Components/FormularioSimple";

import "./Estados.css";


function Estados() {
  return (
<>
   <div>
      <Header />
    <main><br /><br /><br /><br />
        <div>
        <BotonAlerta />
        </div>
        <div> 
        <BotonColor />
        </div>
        <div> 
        <FormularioSimple />
        </div>
    </main>
    
    <Footer />
    </div>
</>
)
}
export default Estados;