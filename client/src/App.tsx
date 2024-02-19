import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import FormRegister from "./Components/FormRegister";
import FormDataRegister from "./Components/FormDataRegister";
import CreateAccount from "./Components/CreateAccount";
import SignIn from "./Components/SignIn";
import { UserProvider } from "./context/authContext";
import PublicRoute from "./routes/publicRoutes";
import PrivateRoute from "./routes/protectedRoutes";
import RestoreAccount from "./Components/RestoreAccount";
import Chatbot from "./Components/Chatbot";
import { RestoreProvider } from "./context/restoreContext";
import { ChatBotProvider } from "./context/chatBotContext";

function App() {
  return (
    <UserProvider>
      <RestoreProvider>
        <ChatBotProvider>
          <Routes>
            <Route path="/" element={<PublicRoute />}>
              <Route index element={<Home />} />
              <Route path="/iniciar_sesion" element={<SignIn />} />
              <Route path="/registrarse" element={<FormRegister />} />
              <Route path="/registrando_user" element={<FormDataRegister />} />
              <Route path="/creando_cuenta" element={<CreateAccount />} />
              <Route path="/resetablecer_cuenta" element={<RestoreAccount />} />
            </Route>
            <Route path="/private" element={<PrivateRoute />}>
              <Route index element={<Chatbot />} />
            </Route>
          </Routes>
        </ChatBotProvider>
      </RestoreProvider>
    </UserProvider>
  );
}

export default App;
