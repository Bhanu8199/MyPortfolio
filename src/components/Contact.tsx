import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { saveContactMessage, ContactFormData } from "@/lib/contact";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/[\s-]/g, ""));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (!validatePhone(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await saveContactMessage(formData);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        phone: "",
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "My Address",
      value: "Eluru, Andhra Pradesh",
      color: "text-blue-500",
    },
    {
      icon: Mail,
      label: "Mail me:",
      value: "mbhanuvardhan630@gmail.com",
      href: "mailto:mbhanuvardhan630@gmail.com",
      color: "text-red-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-background via-red-950/10 to-background"
    >
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'd love to hear from you. Send me a message or connect on social media.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:items-stretch">
          {/* Contact Info */}
          <div className="space-y-6 md:h-full">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${index === 0 ? "from-blue-500/20 to-cyan-500/20 border-blue-500/30" : "from-red-500/20 to-pink-500/20 border-red-500/30"} border-2 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 bg-gradient-to-br ${
                      index === 0 ? "from-blue-400 to-cyan-400" : "from-red-400 to-pink-400"
                    } rounded-lg`}
                  >
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground font-semibold mb-1">{info.label}</p>
                    {"href" in info ? (
                      <a
                        href={(info as (typeof contactInfo)[number]).href}
                        className="text-lg font-semibold text-foreground hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 border-2 border-violet-500/30 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500">
              <p className="font-bold text-foreground mb-4 text-lg">Follow My Journey</p>
              <div className="flex flex-col gap-3">
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-lg border border-blue-500/50 transition-all duration-300"
                  onClick={() => window.open("https://www.linkedin.com/in/bhanu-vardhan-medapalli/", "_blank")}
                >
                  <Linkedin className="w-6 h-6 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white font-semibold py-3 rounded-lg border border-gray-600/50 transition-all duration-300"
                  onClick={() => window.open("https://github.com/bhanu8199", "_blank")}
                >
                  <Github className="w-6 h-6 mr-2" />
                  GitHub
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold py-3 rounded-lg border border-orange-500/50 transition-all duration-300"
                  onClick={() => window.open("https://leetcode.com/u/Bhanu8199/", "_blank")}
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <text x="2" y="20" fontSize="18" fontWeight="bold">
                      LC
                    </text>
                  </svg>
                  LeetCode
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-purple-600/25 via-magenta-500/20 to-pink-600/25 border-2 border-purple-400/80 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 shadow-lg shadow-purple-500/20"
          >
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-transparent bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text mb-3">Your Name</label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-gradient-to-r from-white/20 to-purple-100/20 border-2 border-purple-400/60 rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:border-pink-400 focus:shadow-lg focus:shadow-pink-500/30 transition-all duration-300 focus:bg-white/30"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-transparent bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text mb-3">Your Email</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-gradient-to-r from-white/20 to-purple-100/20 border-2 border-purple-400/60 rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:border-pink-400 focus:shadow-lg focus:shadow-pink-500/30 transition-all duration-300 focus:bg-white/30"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-transparent bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text mb-3">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="Enter your 10-digit phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-gradient-to-r from-white/20 to-purple-100/20 border-2 border-purple-400/60 rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:border-pink-400 focus:shadow-lg focus:shadow-pink-500/30 transition-all duration-300 focus:bg-white/30"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-transparent bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text mb-3">Message</label>
                <Textarea
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-gradient-to-r from-white/20 to-purple-100/20 border-2 border-purple-400/60 rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:border-pink-400 focus:shadow-lg focus:shadow-pink-500/30 transition-all duration-300 focus:bg-white/30 resize-none h-32"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-600 hover:via-purple-700 hover:to-indigo-700 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-xl border-2 border-pink-400/80 shadow-lg shadow-purple-500/50 hover:shadow-2xl hover:shadow-pink-500/60 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

