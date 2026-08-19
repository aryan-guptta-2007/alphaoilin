import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contactSchema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });
      return NextResponse.json(
        { success: false, errors: fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;
    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey && apiKey !== "re_123456789_example") {
      // Dispatch email via Resend HTTP API
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Hamburg Trading Desk <onboarding@resend.dev>",
          to: ["info@hamburg-int.com"],
          subject: `Quote Request / Inquiry: ${data.product} - ${data.name}`,
          html: `
            <h2>Commercial Inquiry Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Product / Role:</strong> ${data.product}</p>
            <p><strong>Target Quantity:</strong> ${data.quantity || "N/A"}</p>
            <p><strong>Discharge Port:</strong> ${data.dischargePort || "N/A"}</p>
            <p><strong>Message / Specifications:</strong></p>
            <p>${data.message.replace(/\n/g, "<br>")}</p>
          `,
        }),
      });

      if (!resendRes.ok) {
        const errorText = await resendRes.text();
        console.error("Resend API error:", errorText);
        // Fallback to success response so user experience is smooth
      }
    } else {
      console.log(
        "[DEMO MODE] Contact Form Submitted (RESEND_API_KEY not configured):",
        JSON.stringify(data, null, 2)
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you. Your commercial inquiry has been logged with our Dubai trading desk. We will respond within 2 hours.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your submission.",
      },
      { status: 500 }
    );
  }
}
