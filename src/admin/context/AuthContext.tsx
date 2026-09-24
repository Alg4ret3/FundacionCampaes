import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  email: string;
  name: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = "campaes_admin_auth_v1";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem(AUTH_STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, [user]);

  const login = async (email: string, pass: string): Promise<boolean> => {
    // Para prototipo/desarrollo: credenciales admin por defecto o cualquier mail válido con pass min 6 caracteres
    // En producción se conecta directamente al servicio Auth de Supabase/Firebase
    if (email === "admin@campaes.org" && pass === "admin123") {
      setUser({
        email,
        name: "Administrador Fundación",
        role: "SuperAdmin",
      });
      return true;
    }
    
    // Permitir demo login si la contraseña es admin123
    if (pass === "admin123" && email.includes("@")) {
      setUser({
        email,
        name: email.split("@")[0].toUpperCase(),
        role: "Editor",
      });
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
