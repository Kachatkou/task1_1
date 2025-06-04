import "./App.css";
import PricingCard from "./PricingCard";

function App() {
  return (
    <PricingCard
      plan="Free"
      price="$0"
      features={["1000 API calls", "1000 API calls", "1000 API calls"]}
    />
  );
}

export default App;
