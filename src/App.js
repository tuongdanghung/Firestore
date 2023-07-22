// import { auth } from "./firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";

function App() {
  // const [user] = useAuthState(auth);
  return (
    <div className="App">
      <SignIn />
    </div>
  );
}
export default App;