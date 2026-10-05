export const personalDetails = {
  name: "Sagar Meena",
  tagline: "BCA-AIML Student | Aspiring Data Analyst | Python Developer",
  location: "Bhopal, Madhya Pradesh, India",
  email: "djangopixel.in@gmail.com",
  phone: "9826182835",
  linkedin: "linkedin.com/in/sagar-meena-034a7834b",
  linkedinUrl: "https://linkedin.com/in/sagar-meena-034a7834b",
  college: "JNCT / JNCT College",
  degree: "BCA-AIML (Bachelor of Computer Applications - Artificial Intelligence & Machine Learning)",
  goal: "To become a professional Data Analyst and Python Developer and build real-world technology solutions.",
  profileImage: "/images/sagar1.png",
  brand: "Djangopixel",
  brandRole: "Digital Marketing & Creative Tech Brand",
  brandDescription: "Entrepreneurial digital venture providing full-suite social media, web development, creative design, and startup marketing solutions."
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Education", path: "/education" },
  { name: "Analytics", path: "/analytics" },
  { name: "Python", path: "/python" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export const skillsData = [
  {
    category: "Programming",
    icon: "Code2",
    skills: [
      { name: "Python", level: "Working Knowledge", status: "Current Focus", desc: "Core Python, OOP, Data Structures, Automation scripts & ML models" },
    ]
  },
  {
    category: "Data Analytics",
    icon: "BarChart3",
    skills: [
      { name: "Pandas", level: "Working Knowledge", status: "Current Focus", desc: "Data wrangling, cleaning, aggregation, and time-series analysis" },
      { name: "NumPy", level: "Working Knowledge", status: "Working Knowledge", desc: "Multidimensional array computations, statistical routines, linear algebra" },
      { name: "Matplotlib", level: "Working Knowledge", status: "Working Knowledge", desc: "Exploratory data visualization, custom plotting & statistical charts" },
      { name: "SQL", level: "Working Knowledge", status: "Current Focus", desc: "Relational queries, joins, window functions, and database schemas" },
      { name: "Excel", level: "Working Knowledge", status: "Working Knowledge", desc: "Advanced formulas, pivot tables, lookup functions, and data models" },
      { name: "Power BI", level: "Working Knowledge", status: "Current Focus", desc: "Interactive BI dashboards, DAX queries, and KPI reporting" },
    ]
  },
  {
    category: "Web Development",
    icon: "Globe",
    skills: [
      { name: "HTML5", level: "Working Knowledge", status: "Working Knowledge", desc: "Semantic markup, modern layout architecture & accessibility" },
      { name: "CSS3", level: "Working Knowledge", status: "Working Knowledge", desc: "Responsive layouts, Flexbox, Grid, custom animations & glassmorphism" },
      { name: "Django", level: "Working Knowledge", status: "Learning", desc: "Python web framework, MVT architecture, ORM, and REST endpoints" },
    ]
  },
  {
    category: "Design & Tools",
    icon: "Figma",
    skills: [
      { name: "Figma", level: "Working Knowledge", status: "Working Knowledge", desc: "UI/UX wireframing, component design, responsive web mockups" },
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Bitcoin Price Prediction",
    category: "Data Analytics & ML",
    tech: ["Python", "Linear Regression", "Data Analysis", "Pandas", "Matplotlib"],
    description: "Predictive model utilizing machine learning regression algorithms to evaluate historical cryptocurrency trends, price fluctuations, and volatility patterns.",
    featured: true,
    highlights: ["Historical trend analytics", "Linear Regression modeling", "Data visualization charts"]
  },
  {
    id: 2,
    title: "Python Marksheet & Progress System",
    category: "Python Development",
    tech: ["Python", "File I/O", "CLI", "Data Structuring"],
    description: "Automated student performance evaluation system that calculates grades, GPA metrics, total percentages, and exports formatted progress reports.",
    featured: true,
    highlights: ["Automated GPA & Grade calculation", "Structured report generation", "Robust input validation"]
  },
  {
    id: 3,
    title: "Laptop Store Billing System",
    category: "Python Development",
    tech: ["Python", "OOP", "File Management"],
    description: "Feature-rich desktop billing software for managing inventory stocks, tax calculations, customer invoice generation, and sales records.",
    featured: false,
    highlights: ["Automated invoice generation", "Stock inventory tracking", "GST & tax calculations"]
  },
  {
    id: 4,
    title: "Interactive Quiz Application",
    category: "Web Development",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Dynamic front-end quiz platform featuring timed questions, instant score calculation, feedback commentary, and responsive layout.",
    featured: false,
    highlights: ["Interactive timer widget", "Instant score evaluation", "Responsive UI/UX"]
  },
  {
    id: 5,
    title: "Advanced Web Calculator",
    category: "Web Development",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Sleek tactical glassmorphism calculator with support for standard arithmetic, trigonometric functions, memory storage, and keyboard shortcuts.",
    featured: false,
    highlights: ["Glassmorphism UI", "Keyboard event support", "Calculation history log"]
  },
  {
    id: 6,
    title: "Jarvis - Personal AI Assistant",
    category: "Python Development",
    tech: ["Python", "Speech Recognition", "Text-to-Speech", "OS Automation"],
    description: "Voice-controlled Python bot capable of opening applications, performing web searches, reciting news summaries, and responding to system commands.",
    featured: true,
    highlights: ["Voice command recognition", "TTS response engine", "System automation tasks"]
  },
  {
    id: 7,
    title: "E-Commerce Customer Analytics",
    category: "Data Analytics",
    tech: ["Python", "Pandas", "Customer Insights", "Data Visualization"],
    description: "Data exploration project analyzing consumer purchasing behavior, churn factors, and top revenue drivers across multi-category store data.",
    featured: false,
    highlights: ["Customer segment analysis", "Purchasing behavior insights", "Churn metric identification"]
  },
  {
    id: 8,
    title: "Sports Performance Statistical Analytics",
    category: "Data Analytics",
    tech: ["Python", "Matplotlib", "NumPy", "Statistical Analysis"],
    description: "Statistical analysis suite evaluating athlete metrics, seasonal scoring trends, player efficiency ratings, and predictive game outcome insights.",
    featured: false,
    highlights: ["Statistical efficiency metrics", "Seasonal performance graphs", "Data-driven player comparisons"]
  },
  {
    id: 9,
    title: "Cost Optimization Executive Dashboard",
    category: "Data Analytics",
    tech: ["Power BI", "Excel", "SQL", "Dashboard Design"],
    description: "Business intelligence dashboard designed to monitor operational expenditure, flag budget variances, and pinpoint key cost-saving opportunities.",
    featured: true,
    highlights: ["Interactive Power BI visualizers", "DAX calculated metrics", "Variance threshold alerts"]
  },
  {
    id: 10,
    title: "Web Development Showcase Suite",
    category: "Web Development",
    tech: ["HTML", "CSS", "JavaScript", "Django", "Figma"],
    description: "Collection of responsive modern web platforms including a College Portal, Book Store e-library, and Fashion Store digital storefront.",
    featured: true,
    highlights: ["College Portal Website", "Book Store Platform", "Fashion E-Commerce UI"]
  }
];

export const experienceData = [
  {
    role: "Junior Web Designer Intern",
    company: "MSME Technology Centre Bhopal",
    location: "Bhopal, MP, India",
    type: "Internship",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
    description: [
      "Designed and developed responsive user interface components adhering to modern web design standards.",
      "Collaborated on client UI wireframes and interactive mockups using Figma.",
      "Optimized website layouts for cross-device compatibility and accessibility."
    ]
  },
  {
    role: "Python Development Intern",
    company: "Technology Training Center",
    duration: "15 Days Intensive",
    type: "Internship",
    technologies: ["Python", "Core Programming", "Data Structures", "Logic Building"],
    description: [
      "Completed intensive 15-day hands-on program focused on Python syntax, object-oriented concepts, and function design.",
      "Built CLI applications, file parsing tools, and mathematical utility scripts.",
      "Gained foundational practice in algorithmic problem solving and modular code architecture."
    ]
  }
];

export const educationData = [
  {
    degree: "BCA-AIML (Bachelor of Computer Applications - AI & Machine Learning)",
    institution: "JNCT / JNCT College",
    location: "Bhopal, Madhya Pradesh, India",
    status: "Currently Pursuing Student",
    highlights: [
      "Specializing in Artificial Intelligence and Machine Learning fundamentals.",
      "Studying Python Programming, Database Management (SQL), Data Structures, and Applied Analytics.",
      "Actively participating in tech hackathons, coding workshops, and data analytics seminars."
    ]
  }
];

export const achievementsData = [
  {
    title: "2nd Position in Quiz Competition",
    organization: "Data Decode Academy",
    description: "Secured runner-up position competing in technical quiz covering Data Analytics concepts, SQL logic, and Python fundamentals."
  }
];

export const djangopixelServices = [
  {
    title: "Social Media Management",
    icon: "Share2",
    desc: "Strategic content planning, profile growth, and active audience engagement across digital platforms."
  },
  {
    title: "Digital Marketing",
    icon: "TrendingUp",
    desc: "Targeted digital marketing campaigns designed to build brand awareness, leads, and customer conversion."
  },
  {
    title: "Website Development",
    icon: "Code",
    desc: "Custom high-speed responsive web applications and landing pages built with modern frontend tools."
  },
  {
    title: "Creative Design",
    icon: "Palette",
    desc: "Professional brand identity design, logo concepts, banners, and visually compelling marketing collateral."
  },
  {
    title: "Post & Reel Editing",
    icon: "Video",
    desc: "Engaging short-form video editing, motion visual effects, and high-impact social media creative posts."
  },
  {
    title: "Startup Support",
    icon: "Rocket",
    desc: "End-to-end digital launch assistance for early-stage startups including branding, online presence, and digital setup."
  }
];

export const analyticsDemoData = {
  kpis: [
    { title: "Monthly Analyzed Records", value: "250,000+", change: "+18%", trend: "up" },
    { title: "Model Accuracy Rating", value: "94.2%", change: "+3.5%", trend: "up" },
    { title: "Dashboard Refresh Rate", value: "< 1.2s", change: "-25%", trend: "down" },
    { title: "Query Efficiency Index", value: "99.8%", change: "+0.4%", trend: "up" }
  ],
  monthlyRevenueTrends: [
    { month: "Jan", Sales: 42000, Target: 40000, Visitors: 12000 },
    { month: "Feb", Sales: 58000, Target: 45000, Visitors: 15400 },
    { month: "Mar", Sales: 65000, Target: 50000, Visitors: 18200 },
    { month: "Apr", Sales: 78000, Target: 55000, Visitors: 22100 },
    { month: "May", Sales: 92000, Target: 65000, Visitors: 28900 },
    { month: "Jun", Sales: 110000, Target: 75000, Visitors: 34500 },
  ],
  techDistribution: [
    { name: "Python / Pandas", percentage: 40, fill: "#189B3F" },
    { name: "SQL Querying", percentage: 25, fill: "#00ff66" },
    { name: "Power BI / DAX", percentage: 20, fill: "#108032" },
    { name: "Excel Analytics", percentage: 15, fill: "#41cb68" }
  ]
};

export const pythonTerminalSnippets = [
  {
    id: "bitcoin",
    title: "bitcoin_predictor.py",
    language: "python",
    code: `import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression

# Load historical cryptocurrency dataset
df = pd.read_csv('bitcoin_historical_prices.csv')

# Feature engineering: moving averages & volatility
df['MA_10'] = df['Close'].rolling(window=10).mean()
df['MA_50'] = df['Close'].rolling(window=50).mean()
df.dropna(inplace=True)

X = df[['MA_10', 'MA_50', 'Volume']]
y = df['Close']

model = LinearRegression()
model.fit(X, y)

latest_data = np.array([[64200.5, 61800.2, 24500000]])
predicted_price = model.predict(latest_data)
print(f"[PREDICTION SCRIPT RUN] Estimated BTC Target: \${predicted_price[0]:,.2f}")`
  },
  {
    id: "jarvis",
    title: "jarvis_assistant.py",
    language: "python",
    code: `import speech_recognition as sr
import pyttsx3
import os

engine = pyttsx3.init()

def speak(text):
    print(f"JARVIS: {text}")
    engine.say(text)
    engine.runAndWait()

def listen_command():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening for Sagar's command...")
        audio = recognizer.listen(source)
    try:
        command = recognizer.recognize_google(audio)
        return command.lower()
    except Exception:
        return "Unknown command"

if __name__ == "__main__":
    speak("Hello Sagar Meena. AI Assistant activated. How can I assist your workflow today?")`
  },
  {
    id: "billing",
    title: "laptop_store_billing.py",
    language: "python",
    code: `class LaptopStoreBilling:
    def __init__(self, customer_name):
        self.customer = customer_name
        self.items = []
        self.gst_rate = 0.18

    def add_item(self, model, qty, unit_price):
        subtotal = qty * unit_price
        self.items.append({"model": model, "qty": qty, "price": unit_price, "subtotal": subtotal})

    def generate_invoice(self):
        gross_total = sum(item["subtotal"] for item in self.items)
        tax = gross_total * self.gst_rate
        final_bill = gross_total + tax
        print(f"=== INVOICE FOR {self.customer.upper()} ===")
        for item in self.items:
            print(f"- {item['model']} x{item['qty']} @ ₹{item['price']:,} = ₹{item['subtotal']:,}")
        print(f"Subtotal: ₹{gross_total:,.2f} | GST (18%): ₹{tax:,.2f}")
        print(f"TOTAL AMOUNT DUE: ₹{final_bill:,.2f}")

billing = LaptopStoreBilling("Sagar Meena")
billing.add_item("Asus ROG Strix", 1, 125000)
billing.generate_invoice()`
  }
];
