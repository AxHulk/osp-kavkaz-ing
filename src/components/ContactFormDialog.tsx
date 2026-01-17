import { useState } from "react";
import { Send } from "lucide-react";
import { IMaskInput } from "react-imask";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactFormDialogProps {
  children: React.ReactNode;
}

const ContactFormDialog = ({ children }: ContactFormDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    setOpen(false);
  };

  // Normalize phone input to always start with +7
  const normalizePhone = (value: string): string => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "");
    
    // Handle different formats
    if (digits.startsWith("8") && digits.length >= 1) {
      return "+7" + digits.slice(1);
    }
    if (digits.startsWith("7")) {
      return "+" + digits;
    }
    if (digits.length > 0 && !digits.startsWith("7")) {
      return "+7" + digits;
    }
    return value;
  };

  const handlePhonePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    const normalized = normalizePhone(pastedText);
    setFormData({ ...formData, phone: normalized });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground font-heading text-xl">
            Связаться с нами
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Имя"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
            />
            <Input
              placeholder="Фамилия"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <IMaskInput
              mask="email@domain.tld"
              blocks={{
                email: {
                  mask: /^[\w._-]*$/,
                },
                domain: {
                  mask: /^[\w.-]*$/,
                },
                tld: {
                  mask: /^[a-z]*$/i,
                },
              }}
              value={formData.email}
              onAccept={(value) => setFormData({ ...formData, email: value })}
              placeholder="Email"
              className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div>
            <IMaskInput
              mask="+7 (000) 000-00-00"
              definitions={{
                '0': /[0-9]/
              }}
              value={formData.phone}
              onAccept={(value) => setFormData({ ...formData, phone: value })}
              onPaste={handlePhonePaste}
              placeholder="Телефон +7 (___) ___-__-__"
              required
              className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div>
            <Textarea
              placeholder="Краткое описание вопроса"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
            />
          </div>
          <Button type="submit" className="w-full btn-primary h-12 text-base">
            <Send className="w-4 h-4 mr-2" />
            Отправить
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;
