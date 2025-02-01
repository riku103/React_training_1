export interface Feature {
  id?: number;
  title: string;
  description: string;
}

export interface FeaturesProps {
  id?: number;
  title?: string;
  features?: Feature[];
}
