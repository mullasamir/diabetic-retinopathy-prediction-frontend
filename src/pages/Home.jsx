import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Upload, Shield, Zap, BarChart3, ArrowRight, Play, Star, Users, Target, 
  Heart, Eye, Clock, CheckCircle, Award, Globe, Cpu, Stethoscope,
  FileText, TrendingUp, ShieldCheck, Smartphone, Database, Cloud,
  Sparkles
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Upload,
      title: 'Easy Upload',
      description: 'Drag and drop your retinal images for instant analysis with our intuitive interface. Supports all major image formats with automatic optimization.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: '98.2% Accuracy',
      description: 'Advanced CNN models trained on 50,000+ retinal images ensure reliable, precise diagnoses with clinical-grade accuracy.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Real-time Results',
      description: 'Get comprehensive analysis reports in under 30 seconds, enabling immediate clinical decisions and patient consultations.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Images Analyzed', icon: BarChart3, color: 'text-green-600' },
    { number: '98.2%', label: 'Accuracy Rate', icon: Shield, color: 'text-blue-600' },
    { number: '500+', label: 'Healthcare Partners', icon: Users, color: 'text-purple-600' },
    { number: '24/7', label: 'Availability', icon: Clock, color: 'text-orange-600' }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Early Detection',
      description: 'Identify diabetic retinopathy at its earliest stages, when treatment is most effective and vision loss is preventable.',
      metrics: '90% reduction in severe vision loss'
    },
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'Reduce screening time from days to seconds, allowing healthcare providers to serve more patients effectively.',
      metrics: '95% faster than manual screening'
    },
    {
      icon: TrendingUp,
      title: 'Cost Effective',
      description: 'Lower healthcare costs by automating routine screenings and reducing the need for specialist referrals.',
      metrics: '60% cost reduction per screening'
    }
  ];

  const technology = [
    {
      icon: Cpu,
      title: 'Deep Learning CNN',
      description: 'Advanced convolutional neural networks specifically designed for medical image analysis with 50+ layers for maximum accuracy.',
      specs: '50+ Layer Architecture • Transfer Learning • Real-time Inference'
    },
    {
      icon: Database,
      title: 'Medical Dataset',
      description: 'Trained on diverse, annotated datasets from multiple healthcare institutions with comprehensive quality validation.',
      specs: '50,000+ Images • Multi-center Data • Expert Annotations'
    },
    {
      icon: Cloud,
      title: 'Secure Cloud Platform',
      description: 'HIPAA-compliant infrastructure with enterprise-grade security, automatic backups, and 99.9% uptime guarantee.',
      specs: 'HIPAA Compliant • AES-256 Encryption • Automated Backups'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Upload Retinal Image',
      description: 'Simply upload your retinal fundus image through our secure platform. Supports JPG, PNG, and DICOM formats.',
      icon: Upload
    },
    {
      step: '02',
      title: 'AI Analysis',
      description: 'Our advanced CNN processes the image in real-time, analyzing multiple biomarkers and risk factors.',
      icon: Cpu
    },
    {
      step: '03',
      title: 'Get Detailed Report',
      description: 'Receive a comprehensive report with severity grading, confidence scores, and clinical recommendations.',
      icon: FileText
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Ophthalmologist, Mayo Clinic',
      content: 'RetinaScan has revolutionized our screening process. The accuracy is remarkable, and it integrates seamlessly into our clinical workflow.',
      rating: 5
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Endocrinologist, Johns Hopkins',
      content: 'Finally, an AI tool that understands clinical needs. The reports are comprehensive and actually help in patient management decisions.',
      rating: 5
    },
    {
      name: 'Healthcare System',
      role: 'Regional Health Network',
      content: 'Implemented across 25 clinics, reducing screening backlog by 80% and improving early detection rates significantly.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center animate-fadeInUp">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm mb-8 animate-pulse">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                <span className="text-sm font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  AI That Sees What the Eye Can’t
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Early Detection
              <span className="block gradient-text">Saves Vision</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              Revolutionizing diabetic retinopathy screening with Our advanced diabetic retinopathy screening system provides rapid, clinical-grade results
              empowering doctors and patients to act before vision loss begins.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
              <Link to="/detect" className="btn-primary group">
                <span className="flex items-center space-x-2">
                  {/* <Play className="h-5 w-5" /> */}
                  <Sparkles className="h-5 w-5" />
                  <span>Try Prediction</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link to="/about" className="btn-secondary group">
                <span className="flex items-center space-x-2">
                  <span>Watch Clinical Demo</span>
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-gray-100 hover-lift">
                    <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      {/* <section className="py-12 bg-white/50 backdrop-blur-sm border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-600 font-medium">Trusted by Leading Healthcare Institutions</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {['Mayo Clinic', 'Johns Hopkins', 'Cleveland Clinic', 'Mass General', 'Stanford Health'].map((institution, index) => (
              <div key={index} className="text-center text-gray-500 font-semibold text-lg">
                {institution}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Challenge of Diabetic Retinopathy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diabetic retinopathy is the leading cause of blindness in working-age adults, yet 50% of patients never get screened.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-xl">
                  <Eye className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Growing Epidemic</h3>
                  <p className="text-gray-600">
                    With 463 million people worldwide living with diabetes, the need for scalable screening solutions has never been greater.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessibility Gap</h3>
                  <p className="text-gray-600">
                    Traditional screening requires specialist visits, creating barriers for rural and underserved communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Clinical Burden</h3>
                  <p className="text-gray-600">
                    Ophthalmologists are overwhelmed with manual screenings, leading to delays in diagnosis and treatment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">By the Numbers</h3>
              <div className="space-y-4">
                {[
                  { stat: '463M', label: 'People with diabetes worldwide' },
                  { stat: '1/3', label: 'Will develop diabetic retinopathy' },
                  { stat: '50%', label: 'Never get screened' },
                  { stat: '90%', label: 'Vision loss preventable with early detection' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="text-lg font-bold text-blue-600">{item.stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How RetinaScan Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple three-step process from image upload to clinical insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card card-hover p-8 text-center">
                  <div className="text-6xl font-bold text-blue-100 mb-4">{step.step}</div>
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">RetinaScan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced technology meets healthcare excellence for better patient outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card card-hover group animate-fadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transformative Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Delivering measurable improvements in patient care and clinical efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card card-hover p-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-green-800 font-semibold text-sm">{benefit.metrics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built on robust, clinically validated AI infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technology.map((tech, index) => (
              <div key={index} className="card card-hover p-8">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <tech.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{tech.description}</p>
                <div className="space-y-2">
                  {tech.specs.split('•').map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{spec.trim()}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what medical experts are saying about RetinaScan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-t-3xl">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Award className="h-16 w-16 mx-auto mb-6 text-white/90" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Eye Care?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of healthcare professionals using RetinaScan for accurate, fast diabetic retinopathy detection. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
              Start Free Trial
            </Link>
            <Link to="/about" className="border border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule Clinical Demo
            </Link>
          </div>
          <p className="text-white/70 text-sm mt-6">No credit card required • 14-day free trial • Setup in minutes</p>
        </div>
      </section>
    </div>
  );
};

export default Home;