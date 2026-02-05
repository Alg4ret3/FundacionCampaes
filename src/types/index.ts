export type CategoryID = 'educativa' | 'cultural' | 'ambiental' | 'social' | 'productiva';

export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: CategoryID;
  extraText: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  category: CategoryID;
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
  id: CategoryID;
  title: string;
  description: string;
  icon: string;
  color: string;
  subItems: string[];
}
