"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const queryRole = searchParams.get("role");
  const queryProduct = searchParams.get("product");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    dischargePort: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (queryRole) {
      setFormData((prev) => ({
        ...prev,
        product: `Career Application: ${queryRole}`,
        message: `Applying for the open position: ${queryRole}.\n\nPlease find my contact details above.`,
      }));
    } else if (queryProduct) {
      setFormData((prev) => ({
        ...prev,
        product: queryProduct,
      }));
    }
  }, [queryRole, queryProduct]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setSuccessMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        if (json.errors) {
          setErrors(json.errors);
        } else {
          setErrors({ form: json.message || "Failed to submit request." });
        }
      } else {
        setSuccessMessage(
          json.message ||
            "Your quote request has been submitted successfully to our trading desk."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          product: "",
          quantity: "",
          dischargePort: "",
          message: "",
        });
      }
    } catch {
      setErrors({
        form: "Network error occurred. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card border border-rule p-5 sm:p-[28px] flex flex-col gap-6 w-full max-w-full">
      <div className="border-b border-rule pb-4">
        <h2 className="font-display font-extrabold text-xl sm:text-2xl text-ink tracking-tight">
          Request a quote
        </h2>
        <p className="font-body text-base font-light leading-relaxed mt-1 text-slate">
          Submit your requirements directly to our Dubai trading desk for spot parcel availability and COA analysis.
        </p>
      </div>

      {successMessage && (
        <div
          role="status"
          aria-live="polite"
          className="bg-moss/10 border-l-4 border-moss p-4 text-ink font-mono text-xs uppercase flex items-start gap-3"
        >
          <svg
            width="20"
            height="20"
            className="w-5 h-5 text-moss shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth="2.5"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <div className="flex flex-col gap-1">
            <span className="font-bold text-moss">INQUIRY RECEIVED</span>
            <span className="text-slate normal-case font-body text-base leading-relaxed">
              {successMessage}
            </span>
          </div>
        </div>
      )}

      {errors.form && (
        <div
          role="alert"
          className="bg-flame/10 border-l-4 border-flame p-4 text-flame font-mono text-xs uppercase"
        >
          <span className="font-bold">SUBMISSION ERROR:</span> {errors.form}
        </div>
      )}

      {/* All fields full width, single column, 48px min height, 16px font to prevent iOS zoom */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-full" noValidate>
        {/* Full Name */}
        <div className="flex flex-col gap-1.5 w-full">
          <label
            htmlFor="name"
            className="font-display text-xs uppercase tracking-wider text-steel font-bold"
          >
            Full Name / Representative
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`bg-linen border px-4 py-3 font-body text-base text-ink rounded-none min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber w-full ${
              errors.name ? "border-flame" : "border-rule focus:border-amber"
            }`}
          />
          {errors.name && (
            <span className="font-mono text-xs text-flame">{errors.name}</span>
          )}
        </div>

        {/* Corporate Email */}
        <div className="flex flex-col gap-1.5 w-full">
          <label
            htmlFor="email"
            className="font-display text-xs uppercase tracking-wider text-steel font-bold"
          >
            Corporate Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className={`bg-linen border px-4 py-3 font-body text-base text-ink rounded-none min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber w-full ${
              errors.email ? "border-flame" : "border-rule focus:border-amber"
            }`}
          />
          {errors.email && (
            <span className="font-mono text-xs text-flame">{errors.email}</span>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5 w-full">
          <label
            htmlFor="phone"
            className="font-display text-xs uppercase tracking-wider text-steel font-bold"
          >
            Telephone / WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+971 50 123 4567"
            className={`bg-linen border px-4 py-3 font-body text-base text-ink rounded-none min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber w-full ${
              errors.phone ? "border-flame" : "border-rule focus:border-amber"
            }`}
          />
          {errors.phone && (
            <span className="font-mono text-xs text-flame">{errors.phone}</span>
          )}
        </div>

        {/* Product Select */}
        <div className="flex flex-col gap-1.5 w-full">
          <label
            htmlFor="product"
            className="font-display text-xs uppercase tracking-wider text-steel font-bold"
          >
            Product Category <span className="text-slate/60 font-normal lowercase">(optional)</span>
          </label>
          <input
            type="text"
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            placeholder="Base Oil SN 500, Gasoil D2, etc."
            className="bg-linen border border-rule px-4 py-3 font-body text-base text-ink rounded-none min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus:border-amber w-full"
          />
        </div>

        {/* Quantity */}
        <div className="flex flex-col gap-1.5 w-full">
          <label
            htmlFor="quantity"
            className="font-display text-xs uppercase tracking-wider text-steel font-bold"
          >
            Parcel Volume <span className="text-slate/60 font-normal lowercase">(optional)</span>
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="5,000 MT / Flexitank 21.5 MT"
            className="bg-linen border border-rule px-4 py-3 font-body text-base text-ink rounded-none min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus:border-amber w-full"
          />
        </div>

        {/* Discharge Port */}
        <div className="flex flex-col gap-1.5 w-full">
          <label
            htmlFor="dischargePort"
            className="font-display text-xs uppercase tracking-wider text-steel font-bold"
          >
            Discharge Port <span className="text-slate/60 font-normal lowercase">(optional)</span>
          </label>
          <input
            type="text"
            id="dischargePort"
            name="dischargePort"
            value={formData.dischargePort}
            onChange={handleChange}
            placeholder="Jebel Ali / Hamriyah / Singapore"
            className="bg-linen border border-rule px-4 py-3 font-body text-base text-ink rounded-none min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus:border-amber w-full"
          />
        </div>

        {/* Message / Specifications */}
        <div className="flex flex-col gap-1.5 w-full">
          <label
            htmlFor="message"
            className="font-display text-xs uppercase tracking-wider text-steel font-bold"
          >
            Specifications & Message Notes
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Please detail required viscosity parameters, delivery timeline, or commercial terms..."
            className={`bg-linen border px-4 py-3 font-body text-base text-ink rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-amber w-full ${
              errors.message ? "border-flame" : "border-rule focus:border-amber"
            }`}
          />
          {errors.message && (
            <span className="font-mono text-xs text-flame">{errors.message}</span>
          )}
        </div>

        {/* Submit Button (Full Width, 48px min height) */}
        <div className="pt-2 w-full">
          <Button
            type="submit"
            variant="amber"
            disabled={isSubmitting}
            className="w-full py-4 min-h-[48px] inline-flex items-center justify-center text-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "TRANSMITTING TO TRADING DESK..." : "SUBMIT COMMERCIAL INQUIRY"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export const ContactForm: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="p-8 bg-paper border border-rule font-mono text-xs text-slate">
          LOADING INQUIRY FORM...
        </div>
      }
    >
      <ContactFormContent />
    </Suspense>
  );
};

export default ContactForm;
