export interface PracticeArea {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  iconName: string;
  coreDeliverables: string[];
  engagementLength: string;
  idealFor: string;
  leadPartnerId: string;
  keyMetric: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  location: string;
  headline: string;
  challenge: string;
  solution: string;
  metrics: { value: string; label: string }[];
  duration: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface Partner {
  id: string;
  name: string;
  role: string;
  practiceArea: string;
  bio: string;
  credentials: string[];
  priorExperience: string[];
  education: string;
  email: string;
}

export interface DiagnosticQuestion {
  id: number;
  category: string;
  question: string;
  context: string;
  options: {
    text: string;
    points: number;
    insight: string;
  }[];
}

export interface DiagnosticResult {
  score: number;
  maturityTier: 'Emerging & Vulnerable' | 'Growth Phase with Bottlenecks' | 'Established & Optimizing' | 'Market-Leading Enterprise';
  executiveSummary: string;
  identifiedStrengths: string[];
  criticalPriorities: string[];
  recommendedPracticeId: string;
}

export interface ConsultationBooking {
  id: string;
  referenceNumber: string;
  clientName: string;
  email: string;
  phone: string;
  companyName: string;
  companyRole: string;
  companyStage: string;
  practiceId: string;
  partnerId: string;
  selectedDate: string;
  selectedTime: string;
  agendaSummary: string;
  hasNDA: boolean;
  status: 'Confirmed' | 'In Review' | 'Completed';
  createdAt: string;
}
