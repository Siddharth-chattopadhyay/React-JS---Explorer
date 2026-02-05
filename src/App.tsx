import {Checkbox} from "@heroui/checkbox";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import OffCanvas from "./components/OffCanvas.jsx"; // Ignore this error. It still works

function App() {
  return (
    <>
    <div className="p-5">
      <h1>NextUI or HeroUI</h1>
      <Checkbox defaultSelected>Checkbox</Checkbox>
      <br />
      <Checkbox isDisabled>Checkbox</Checkbox>
      <br />
      <Checkbox isDisabled defaultSelected>Checkbox</Checkbox>
    </div>
    <div className="p-5">
      <h1>React Bootstrap</h1>
      <OffCanvas/>
    </div>
    <div className="p-5">
      <h1>TailWindCSS</h1>
      <p className="text-3xl font-bold underline">Paragraph is styled using tailwindcss</p>
    </div>
    </>
  );
}

export default App;
