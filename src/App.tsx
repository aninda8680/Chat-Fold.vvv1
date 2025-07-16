// src/App.tsx
import AppRoutes from "./Backend/AppRoutes";
import { AuthProvider } from "./Backend/AuthContext";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
