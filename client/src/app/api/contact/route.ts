import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder_for_build");

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            name,
            email,
            phone,
            service,
            message,
            website,
        } = body;

        // Honeypot spam protection
        if (website) {
            return Response.json({ success: true });
        }

        if (!name || !email || !phone || !service) {
            return Response.json(
                {
                    success: false,
                    message: "Please fill in all required fields.",
                },
                { status: 400 }
            );
        }

        const safeName = escapeHtml(String(name).trim());
        const safeEmail = escapeHtml(String(email).trim());
        const safePhone = escapeHtml(String(phone).trim());
        const safeService = escapeHtml(String(service).trim());
        const safeMessage = escapeHtml(String(message || "").trim());

        // Send enquiry to Creovix Stack
        const { error } = await resend.emails.send({
            from:
                process.env.FROM_EMAIL ||
                "Creovix Stack <onboarding@resend.dev>",

            to: [
                process.env.CONTACT_EMAIL ||
                "creovixstack@gmail.com",
            ],

            replyTo: email,

            subject: `New Project Enquiry — ${name}`,

            html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 30px; background: #f8f7fb;">
          
          <div style="background: #111116; padding: 24px; border-radius: 16px;">
            
            <h1 style="color: #a855f7; margin: 0 0 8px;">
              New Project Enquiry
            </h1>

            <p style="color: #a1a1aa; margin-bottom: 25px;">
              Someone submitted a project enquiry through the Creovix Stack website.
            </p>

            <div style="background: #18181b; padding: 20px; border-radius: 12px;">
              
              <p style="color: #ffffff;">
                <strong>Name:</strong><br />
                ${safeName}
              </p>

              <p style="color: #ffffff;">
                <strong>Email:</strong><br />
                ${safeEmail}
              </p>

              <p style="color: #ffffff;">
                <strong>Phone / WhatsApp:</strong><br />
                ${safePhone}
              </p>

              <p style="color: #ffffff;">
                <strong>Service:</strong><br />
                ${safeService}
              </p>

              <p style="color: #ffffff;">
                <strong>Project Details:</strong><br />
                ${safeMessage || "No additional details provided."}
              </p>

            </div>

            <p style="color: #71717a; font-size: 12px; margin-top: 25px;">
              Submitted from creovixstack.com
            </p>

          </div>
        </div>
      `,
        });

        if (error) {
            console.error("Resend error:", error);

            return Response.json(
                {
                    success: false,
                    message: "Unable to send your enquiry right now.",
                },
                { status: 500 }
            );
        }

        // Send acknowledgement to customer
        await resend.emails.send({
            from:
                process.env.FROM_EMAIL ||
                "Creovix Stack <onboarding@resend.dev>",

            to: [email],

            subject: "We received your enquiry — Creovix Stack",

            html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 30px;">
          
          <h2 style="color: #7c3aed;">
            Thanks for contacting Creovix Stack!
          </h2>

          <p>
            Hi ${safeName},
          </p>

          <p>
            We've received your project enquiry and will review your requirements.
          </p>

          <p>
            We'll get back to you shortly to discuss your project and the next steps.
          </p>

          <br />

          <p>
            Regards,<br />
            <strong>Creovix Stack</strong>
          </p>

          <p style="color: #71717a; font-size: 13px;">
            creovixstack.com
          </p>

        </div>
      `,
        });

        return Response.json({
            success: true,
            message: "Your enquiry has been sent successfully.",
        });
    } catch (error) {
        console.error("Contact API error:", error);

        return Response.json(
            {
                success: false,
                message: "Something went wrong. Please try again.",
            },
            { status: 500 }
        );
    }
}