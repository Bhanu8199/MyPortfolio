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

            <div className="bg-gradient-to-br from-blue-600/40 to-indigo-600/40 border-2 border-blue-400/80 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 shadow-lg shadow-blue-500/30">
              <p className="font-bold text-white mb-4 text-lg">Follow My Journey</p>
              <div className="flex flex-col gap-3">
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-700 text-white font-bold py-3 rounded-lg border-2 border-blue-300/80 transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-600/70 transform hover:scale-105 text-base"
                  onClick={() => window.open("https://www.linkedin.com/in/bhanu-vardhan-medapalli/", "_blank")}
                >
                  <Linkedin className="w-6 h-6 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-slate-700 via-slate-900 to-black hover:from-slate-800 hover:via-black hover:to-slate-950 text-white font-bold py-3 rounded-lg border-2 border-slate-500/80 transition-all duration-300 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/70 transform hover:scale-105 text-base"
                  onClick={() => window.open("https://github.com/bhanu8199", "_blank")}
                >
                  <Github className="w-6 h-6 mr-2" />
                  GitHub
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 hover:from-yellow-600 hover:via-orange-700 hover:to-red-700 text-white font-bold py-3 rounded-lg border-2 border-orange-400/80 transition-all duration-300 shadow-lg shadow-orange-600/50 hover:shadow-xl hover:shadow-orange-700/70 transform hover:scale-105 text-base"
                  onClick={() => window.open("https://leetcode.com/u/Bhanu8199/", "_blank")}
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    {/* Rounded square */}
                    <rect x="3" y="3" width="18" height="18" rx="3" ry="3" />
                    {/* LeetCode-ish glyph */}
                    <path d="M9 9l6 6" />
                    <path d="M15 9l-6 6" />
                    {/* Small dot to suggest 'LC' */}
                    <circle cx="12" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
                  </svg>
                  <span>LeetCode</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-indigo-700/40 via-purple-600/35 to-blue-600/40 border-2 border-indigo-400/90 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 shadow-lg shadow-indigo-600/40"
          >
            <div className="space-y-5">
              <div>
                <label className="block text-base font-bold text-white mb-3 drop-shadow-lg">Your Name</label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/25 border-2 border-indigo-300/80 rounded-xl px-5 py-3 text-white placeholder:text-gray-300 focus:border-cyan-300 focus:shadow-lg focus:shadow-cyan-400/40 transition-all duration-300 focus:bg-white/35 font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-base font-bold text-white mb-3 drop-shadow-lg">Your Email</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/25 border-2 border-indigo-300/80 rounded-xl px-5 py-3 text-white placeholder:text-gray-300 focus:border-cyan-300 focus:shadow-lg focus:shadow-cyan-400/40 transition-all duration-300 focus:bg-white/35 font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-base font-bold text-white mb-3 drop-shadow-lg">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="Enter your 10-digit phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/25 border-2 border-indigo-300/80 rounded-xl px-5 py-3 text-white placeholder:text-gray-300 focus:border-cyan-300 focus:shadow-lg focus:shadow-cyan-400/40 transition-all duration-300 focus:bg-white/35 font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-base font-bold text-white mb-3 drop-shadow-lg">Message</label>
                <Textarea
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/25 border-2 border-indigo-300/80 rounded-xl px-5 py-3 text-white placeholder:text-gray-300 focus:border-cyan-300 focus:shadow-lg focus:shadow-cyan-400/40 transition-all duration-300 focus:bg-white/35 resize-none h-32 font-medium"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-700 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-xl border-2 border-cyan-300/80 shadow-lg shadow-blue-600/50 hover:shadow-2xl hover:shadow-blue-700/70 transition-all duration-300 transform hover:scale-105 text-lg"
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

