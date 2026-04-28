import { createContext, useContext, useState, ReactNode } from 'react';

interface UIState {
  isMobileMenuOpen: boolean;
  activeModal: string | null;
}

interface UIContextProps extends UIState {
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  openModal: (modalId: string) => void;
  closeModal: () => void;
}

const UIContext = createContext<UIContextProps | undefined>(undefined);

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<UIState>({
    isMobileMenuOpen: false,
    activeModal: null,
  });

  const toggleMobileMenu = () => {
    setState(prev => ({ ...prev, isMobileMenuOpen: !prev.isMobileMenuOpen }));
  };

  const closeMobileMenu = () => {
    setState(prev => ({ ...prev, isMobileMenuOpen: false }));
  };

  const openModal = (modalId: string) => {
    setState(prev => ({ ...prev, activeModal: modalId }));
  };

  const closeModal = () => {
    setState(prev => ({ ...prev, activeModal: null }));
  };

  return (
    <UIContext.Provider value={{ 
      ...state, 
      toggleMobileMenu, 
      closeMobileMenu, 
      openModal, 
      closeModal 
    }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};
