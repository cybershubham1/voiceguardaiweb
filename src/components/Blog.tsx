import React, { useState } from 'react';
import BlogPost, { BlogPost as BlogPostType } from './BlogPost';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

const SAMPLE_POSTS: BlogPostType[] = [
  {
    id: '1',
    title: 'Advanced CNN-LSTM Architecture for Deepfake Detection',
    excerpt: 'Exploring the latest hybrid neural network architectures that combine spatial and temporal analysis for superior deepfake detection.',
    content: `Recent advances in deepfake detection have led to the development of sophisticated hybrid architectures that leverage both spatial and temporal features. Our research shows that combining CNN-LSTM networks with attention mechanisms achieves state-of-the-art results.

    Key Technical Components:
    1. Spatial Feature Extraction
    - Utilizes EfficientNet-B4 backbone for frame-level feature extraction
    - Implements spatial attention to focus on manipulation artifacts
    - Achieves 97.8% accuracy on single-frame analysis

    2. Temporal Sequence Analysis
    - LSTM layers process frame sequences to detect temporal inconsistencies
    - Bi-directional processing captures both forward and backward dependencies
    - Temporal attention weights key frame sequences

    3. Multi-modal Integration
    - Audio-visual synchronization analysis
    - Facial landmark tracking for expression consistency
    - Biological signal detection (eye blinking, pulse)

    Implementation Results:
    - 99.8% detection accuracy on high-quality deepfakes
    - 94.6% accuracy on heavily compressed videos
    - 2.1% false positive rate
    
    This architecture represents a significant step forward in robust deepfake detection, particularly in challenging real-world scenarios.`,
    author: 'Aniket Chikse',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80&w=800&h=450',
    tags: ['Detection Methods', 'Technology', 'Research']
  },
  {
    id: '2',
    title: 'Ethical Implications of Deepfake Technology in Digital Society',
    excerpt: 'A comprehensive analysis of the ethical challenges and societal impact of synthetic media proliferation.',
    content: `The rapid advancement of deepfake technology presents significant ethical challenges that intersect with privacy, security, and social trust. Our analysis reveals several critical dimensions:

    Privacy Implications:
    - Personal Identity Protection
    - Consent in Digital Content Creation
    - Data Rights and Ownership

    Security Challenges:
    - Corporate Identity Theft
    - Political Misinformation
    - Financial Fraud Prevention

    Social Impact:
    - Trust in Digital Media
    - Authentication Standards
    - Public Awareness and Education

    Recommended Framework:
    1. Ethical Guidelines for Development
    2. Transparent Detection Methods
    3. Public Education Initiatives
    4. Legal and Regulatory Standards

    The path forward requires a balanced approach between innovation and protection.`,
    author: 'Aniket Chikse',
    date: 'Mar 12, 2024',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=450',
    tags: ['Ethics', 'Social Impact']
  },
  {
    id: '3',
    title: 'Enterprise Solutions for Digital Identity Protection',
    excerpt: 'How businesses can implement comprehensive deepfake detection systems to protect their digital assets.',
    content: `In today's digital landscape, protecting corporate identity and digital assets has become paramount. VoiceGuardAI's enterprise solutions offer comprehensive protection through:

    1. Multi-layer Authentication
    - Biometric verification
    - Behavioral analysis
    - Device fingerprinting

    2. Real-time Monitoring
    - Continuous content scanning
    - Automated threat detection
    - Instant alert system

    3. Automated Response Systems
    - Immediate content flagging
    - Automated takedown requests
    - Incident documentation

    Implementation Results:
    - 99.8% success rate in preventing unauthorized synthetic media attacks
    - 85% reduction in response time
    - 92% decrease in false positives`,
    author: 'Aniket Chikse',
    date: 'Mar 10, 2024',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800&h=450',
    tags: ['Enterprise', 'Security', 'Solutions']
  },
  {
    id: '4',
    title: 'Future of Deepfake Detection: Quantum Computing Integration',
    excerpt: 'Exploring how quantum computing could revolutionize deepfake detection capabilities.',
    content: `The integration of quantum computing in deepfake detection presents unprecedented opportunities for enhanced security and detection accuracy. Based on recent research:

    Quantum Advantages:
    - Exponentially faster pattern recognition
    - Complex feature space analysis
    - Quantum entropy for authenticity verification

    Technical Implementation:
    1. Quantum Neural Networks (QNN)
    2. Quantum Feature Extraction
    3. Quantum-Classical Hybrid Systems

    Expected Impact:
    - 1000x faster processing
    - Near-perfect accuracy
    - Reduced computational costs

    This represents the next frontier in deepfake detection technology.`,
    author: 'Aniket Chikse',
    date: 'Mar 8, 2024',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800&h=450',
    tags: ['Future Tech', 'Technology']
  },
  {
    id: '5',
    title: 'Multi-Modal Detection: The Power of Combined Analysis',
    excerpt: 'How combining multiple detection methods creates more robust deepfake identification systems.',
    content: `Multi-modal detection represents the cutting edge of deepfake identification technology. By combining various analysis methods, we achieve unprecedented accuracy:

    Core Components:
    1. Visual Analysis
    - Facial inconsistency detection
    - Temporal coherence checking
    - Artifact identification

    2. Audio Analysis
    - Frequency spectrum analysis
    - Voice pattern verification
    - Background noise consistency

    3. Behavioral Analysis
    - Expression authenticity
    - Movement patterns
    - Physiological signals

    Integration Results:
    - 99.9% detection rate
    - 0.1% false positive rate
    - Real-time processing capability`,
    author: 'Aniket Chikse',
    date: 'Mar 5, 2024',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800&h=450',
    tags: ['Detection Methods', 'Technology']
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [currentPage, setCurrentPage] = useState(0);

  const allTags = Array.from(
    new Set(SAMPLE_POSTS.flatMap(post => post.tags))
  );

  const filteredPosts = SAMPLE_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const handleSlide = (direction: 'left' | 'right') => {
    setSlideDirection(direction);
    if (direction === 'right') {
      setCurrentPage(prev => (prev + 1) % filteredPosts.length);
    } else {
      setCurrentPage(prev => (prev - 1 + filteredPosts.length) % filteredPosts.length);
    }
  };

  return (
    <section className="py-24 bg-slate-900" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay informed about the latest developments in deepfake detection and digital security
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg 
                          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                          text-white placeholder-gray-400"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors duration-200
                    ${selectedTag === tag 
                      ? 'bg-indigo-500 text-white' 
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex justify-between items-center absolute top-1/2 left-4 right-4 z-10 -translate-y-1/2 pointer-events-none">
            <button
              onClick={() => handleSlide('left')}
              className="p-2 rounded-full bg-slate-800/90 text-white hover:bg-slate-700/90 transition-colors pointer-events-auto"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => handleSlide('right')}
              className="p-2 rounded-full bg-slate-800/90 text-white hover:bg-slate-700/90 transition-colors pointer-events-auto"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div 
            className="transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentPage * 100}%)`,
              display: 'flex',
              width: `${filteredPosts.length * 100}%`
            }}
          >
            {filteredPosts.map((post) => (
              <div 
                key={post.id}
                className="w-full px-4"
                style={{ flex: `0 0 ${100 / filteredPosts.length}%` }}
              >
                <BlogPost 
                  post={post}
                  onClick={() => setSelectedPost(post)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {filteredPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setSlideDirection(index > currentPage ? 'right' : 'left');
                setCurrentPage(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors duration-200 
                ${currentPage === index ? 'bg-indigo-500' : 'bg-slate-700 hover:bg-slate-600'}`}
            />
          ))}
        </div>

        {selectedPost && (
          <BlogPost 
            post={selectedPost} 
            isFullView={true} 
            onClose={() => setSelectedPost(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Blog;