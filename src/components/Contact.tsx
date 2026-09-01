import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import type { ContactFormData } from "@/lib/contact";

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
      const res = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Request failed");
      }

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
    },
    {
      icon: Mail,
      label: "Mail me:",
      value: "mbhanuvardhan630@gmail.com",
      href: "mailto:mbhanuvardhan630@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-background"
    >
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="text-primary">
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
                className="bg-surface border border-border rounded-lg p-6 hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground font-semibold mb-1">{info.label}</p>
                    {"href" in info ? (
                      <a
                        href={(info as any).href}
                        className="text-base font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-base font-semibold text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-surface border border-primary/30 rounded-lg p-6 hover:shadow-lg transition-all">
              <p className="font-bold text-foreground mb-4 text-lg">Follow My Journey</p>
              <div className="flex flex-col gap-3">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-all"
                  onClick={() => window.open("https://www.linkedin.com/in/bhanu-vardhan-medapalli/", "_blank")}
                >
                  <Linkedin className="w-6 h-6 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  className="w-full bg-surface hover:bg-surface/80 text-foreground font-bold py-3 rounded-lg border-2 border-border transition-all"
                  onClick={() => window.open("https://github.com/bhanu8199", "_blank")}
                >
                  <Github className="w-6 h-6 mr-2" />
                  GitHub
                </Button>
                <Button
                  className="w-full bg-surface hover:bg-surface/80 text-foreground font-bold py-3 rounded-lg border-2 border-border transition-all"
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
                    <rect x="3" y="3" width="18" height="18" rx="3" ry="3" />
                    <path d="M9 9l6 6" />
                    <path d="M15 9l-6 6" />
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
            className="bg-surface border border-border rounded-lg p-8 hover:shadow-lg transition-all"
          >
            <div className="space-y-5">
              <div>
                <label className="block text-base font-bold text-foreground mb-3">Your Name</label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-primary/5 border-2 border-border rounded-lg px-5 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-0 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-base font-bold text-foreground mb-3">Your Email</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-primary/5 border-2 border-border rounded-lg px-5 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-0 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-base font-bold text-foreground mb-3">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="Enter your 10-digit phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-primary/5 border-2 border-border rounded-lg px-5 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-0 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-base font-bold text-foreground mb-3">Message</label>
                <Textarea
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-primary/5 border-2 border-border rounded-lg px-5 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-0 transition-colors"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-white font-bold py-3 rounded-lg transition-all"
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
