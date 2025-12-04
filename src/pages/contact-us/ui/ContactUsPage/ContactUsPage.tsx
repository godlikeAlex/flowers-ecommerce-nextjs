"use client";

import { US_TELEPHONE_MASK } from "@/shared/config";
import { Button, Input, PageBanner, Textarea } from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContactUsForm, contactUsSchema } from "./contact-us-schema";
import { toast } from "sonner";
import { ApiClient } from "@/shared/api";

export default function ContactUsPage() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContactUsForm>({
    resolver: zodResolver(contactUsSchema),
  });

  const onSubmit = async (values: ContactUsForm) => {
    try {
      await ApiClient.POST("/contact-us", values);
      toast.success(
        "Thank you! Your message has been sent. We’ll reach out to you shortly.",
      );
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <>
      <PageBanner title="Contact Us" />

      <section className="py-80">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)} className="row">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div className="col-md-12">
                  <h4 className="mb-12">Let’s Talk</h4>
                  <p className="mb-32">
                    Have questions or want to create a custom order? <br />{" "}
                    Write to us — we’re here to help.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Input
                    placeholder="Your name"
                    error={errors.name?.message}
                    {...register("name")}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="row mt-16 row-gap-3">
                    <div className="col-md-6">
                      <Input
                        disabled={isSubmitting}
                        placeholder="Your Email"
                        error={errors.email?.message}
                        {...register("email")}
                      />
                    </div>

                    <div className="col-md-6">
                      <Input.Mask
                        {...US_TELEPHONE_MASK}
                        showMask
                        disabled={isSubmitting}
                        error={errors.phone?.message}
                        {...register("phone")}
                      />
                    </div>
                  </div>

                  <div className="row mt-16 mb-32">
                    <div className="col-md-12">
                      <Textarea
                        rows={6}
                        disabled={isSubmitting}
                        label="Message"
                        error={errors.message?.message}
                        {...register("message")}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <Button disabled={isSubmitting}>Submit</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
