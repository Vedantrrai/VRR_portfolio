import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Instagram,
  Twitter,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_cfuxsid", // ✅ your service ID
        "template_362vboh", // ✅ your template ID
        formRef.current!,
        "tnOU4NmFT296Vk_35" // ⚠️ replace with your EmailJS Public Key
      )
      .then(
        () => {
          toast({
            title: "Message sent successfully! 🎉",
            description: "I'll get back to you soon.",
          });
          setLoading(false);
          formRef.current?.reset();
        },
        (error) => {
          toast({
            title: "Failed to send message ❌",
            description: "Please try again later.",
            variant: "destructive",
          });
          console.error(error);
          setLoading(false);
        }
      );
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      href: "https://linkedin.com/in/vedantrrai7",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: <Github size={24} />,
      href: "https://github.com/vedantrrai",
      color: "hover:text-gray-400",
    },
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      href: "https://instagram.com/vedantrrai",
      color: "hover:text-pink-400",
    },
    {
      name: "Twitter",
      icon: <Twitter size={24} />,
      href: "https://twitter.com/vedantrrai",
      color: "hover:text-sky-400",
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      href: "mailto:vedantrrai@gmail.com",
      color: "hover:text-red-400",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-playfair mb-4">
            Let's{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to start your next project? Let's chat about it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE: Contact Info + Social Links */}
          <div className="fade-in">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-playfair mb-6 text-foreground">
                  Let's build something amazing together
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Whether you have a project in mind, need design consultation,
                  or just want to say hello, I'm always open to new
                  opportunities and interesting conversations.
                </p>
              </div>

              <div className="flex items-center space-x-3 text-lg text-muted-foreground">
                <Phone size={22} className="text-primary" />
                <span>+91 99753 98860</span>
              </div>

              <div className="flex items-center space-x-3 text-lg text-muted-foreground">
                <Mail size={22} className="text-primary" />
                <span>vedantrrai@gmail.com</span>
              </div>

              <div className="flex items-center space-x-3 text-lg text-muted-foreground">
                <MapPin size={22} className="text-primary" />
                <span>Mumbai, Maharashtra, India</span>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-foreground">
                  Connect with me
                </h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-gradient-card rounded-xl border border-border/50 glow-hover transition-all duration-300 ${link.color}`}
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: EmailJS Contact Form */}
          <div className="fade-in fade-in-delay-1">
            <div className="bg-gradient-card rounded-2xl p-8 glow-card border border-border/50">
              <h3 className="text-2xl font-bold font-playfair mb-6 text-card-foreground">
                Send me a message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />

                <Input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-primary text-primary-foreground glow-hover font-semibold py-6 rounded-xl"
                >
                  <Send className="mr-2" size={20} />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
