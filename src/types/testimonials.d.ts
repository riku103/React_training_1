export interface Testimonial {
  id?: number;
  text: string;
  author: string;
}

export interface TestimonialsProps {
  id?: number;
  title?: string;
  testimonials?: Testimonial[];
}
