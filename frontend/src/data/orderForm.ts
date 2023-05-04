import { z } from "zod";

export const paymentFormSchema = z.object({
    name: z.string({
        required_error: "Name is required"
    }),
    email: z
        .string({
            required_error: "Email is required"
        })
        .email("please enter a valid email"),
    card: z
        .string({
            required_error: "Card is required"
        })
        .regex(/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/, "please enter a valid card number"),
    address: z.string({
        required_error: "Address is required"
    }),
    addressLine2: z.string().optional(),
    city: z.string({
        required_error: "City is required"
    }),
    state: z.string({
        required_error: "State is required"
    }),
    zip: z
        .string({ required_error: "Zip is required" })
        .regex(/^[0-9]{5}$/, "please enter a valid zip code"),

});

export type PaymentFormInputs = z.TypeOf<typeof paymentFormSchema>