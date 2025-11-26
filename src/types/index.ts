export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: 'social' | 'ambiental' | 'educativo';
  extraText: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'social' | 'ambiental' | 'educativo';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ActionLine {
  id: string;
  title: string;
  description: string;
  icon: string;
}
